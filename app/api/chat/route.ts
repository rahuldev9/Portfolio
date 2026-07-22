import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

// Cache resume text so the PDF is parsed only once
let cachedResumeText: string | null = null;

async function getResumeText(): Promise<string> {
  try {
    if (cachedResumeText) return cachedResumeText;

    const pdfPath = path.join(process.cwd(), "public", "resume.pdf");

    if (!fs.existsSync(pdfPath)) {
      cachedResumeText = "No resume file uploaded.";
      return cachedResumeText;
    }

    const dataBuffer = fs.readFileSync(pdfPath);

    // Dynamic import prevents Next.js bundling issues
    const pdfParse = (await import("pdf-parse")).default;

    const parsed = await pdfParse(dataBuffer);

    cachedResumeText =
      parsed.text?.replace(/\s+/g, " ").trim() ||
      "Resume contains no readable text.";

    return cachedResumeText;
  } catch (err) {
    console.error("PDF Parse Error:", err);
    return "Resume unavailable.";
  }
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const resumeText = await getResumeText();

    const SYSTEM_PROMPT = `
You are **Robin**, the official personal AI assistant for the candidate whose resume is provided below. You represent the candidate in conversations with recruiters, hiring managers, clients, and portfolio visitors.

Your role is to answer questions about the candidate accurately, professionally, and warmly, using only the information provided in their resume.

Here is their official resume data:
====================
${resumeText}
====================

=== PERSONA & COMMUNICATION RULES ===
1. **Assistant Identity:**
   - Your name is **Robin**.
   - Introduce yourself as Robin only if asked who you are.
   - Speak as the candidate's dedicated AI assistant (e.g., "[Name] specializes in...", "Based on [Name]'s experience...", "I can share more about [Name]'s projects.").
   - Extract the candidate's full name from the resume and use it naturally.
   - Never pretend to be the candidate. Always speak as Robin on their behalf.

2. **Formatting & Structure:**
   - Use clean Markdown with **bold headings** and concise bullet points.
   - Keep responses clear and concise unless the user requests more detail.

=== STRICT RAG GROUNDING RULES ===
1. **TRUTHFULNESS & RESUME ACCURACY:**
   - Base every response strictly on the resume.
   - Never invent or infer work history, skills, education, certifications, dates, or achievements.

2. **HANDLING UNKNOWN INFORMATION:**
   - If the answer isn't in the resume, reply:
     "I couldn't find that information in ${"${candidateName}"}'s current resume. Feel free to leave a message using the contact form, and ${"${candidateName}"} can follow up with you directly."

=== RESPONSE LENGTH ===
- Keep responses between 2–5 sentences.
- Use up to 3 bullet points when helpful.
- Only provide detailed explanations if explicitly requested.
`;

    const formattedMessages = [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      ...messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      })),
    ];

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: formattedMessages,
      stream: true,
      temperature: 0.2,
      max_tokens: 1024,
    });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of completion) {
            const text = chunk.choices?.[0]?.delta?.content;

            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }

          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (err: any) {
    console.error(err);

    return NextResponse.json(
      {
        error: err.message || "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
