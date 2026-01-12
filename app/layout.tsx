import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mudavath Rahul | Full Stack Developer & Gen AI Engineer",
    template: "%s | Mudavath Rahul",
  },

  description:
    "Mudavath Rahul is a Full Stack Developer and Gen AI Engineer skilled in MERN Stack, Next.js, Python, LLMs, RAG, and Automation. View projects, experience, and contact details.",

  keywords: [
    "Mudavath Rahul",
    "Full Stack Developer",
    "Gen AI Engineer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Python Developer",
    "LLM Engineer",
    "RAG",
    "Hyderabad Developer",
  ],

  metadataBase: new URL("https://rahulmudavath.vercel.app"),

  alternates: {
    canonical: "https://rahulmudavath.vercel.app",
  },

  openGraph: {
    title: "Mudavath Rahul | Full Stack Developer & Gen AI Engineer",
    description:
      "Portfolio of Mudavath Rahul – Full Stack Developer & Gen AI Engineer specializing in MERN Stack, Next.js, LLMs, and Automation.",
    url: "https://rahulmudavath.vercel.app",
    siteName: "Mudavath Rahul Portfolio",
    images: [
      {
        url: "https://rahulmudavath.vercel.app/Rahul.jpg",
        width: 1200,
        height: 630,
        alt: "Mudavath Rahul - Full Stack Developer",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mudavath Rahul | Full Stack Developer & Gen AI Engineer",
    description:
      "Portfolio of Mudavath Rahul – Full Stack Developer & Gen AI Engineer.",
    images: ["/Rahul.jpg"],
  },
  verification: {
    google: "ipHbApTsNCMMhHn91DcftOdV-fdz6Bsx_qDN0GkoUdg",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="ipHbApTsNCMMhHn91DcftOdV-fdz6Bsx_qDN0GkoUdg"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mudavath Rahul",
              url: "https://rahul-mudavath.vercel.app/",
              image: "/Rahul.jpg",
              jobTitle: "Full Stack Developer & Gen AI Engineer",
              description:
                "Mudavath Rahul is a Full Stack Developer and Gen AI Engineer specializing in MERN Stack, Next.js, Python, LLMs, RAG, and Automation.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                addressCountry: "India",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Osmania University",
              },
              sameAs: [
                "https://www.linkedin.com/in/rahul-mudavath-848978301",
                "https://github.com/rahuldev9",
                "https://www.instagram.com/urstrulyrahul_09",
              ],
              knowsAbout: [
                "Full Stack Development",
                "Generative AI",
                "Next.js",
                "React.js",
                "Node.js",
                "Python",
                "LLMs",
                "RAG",
                "Automation",
                "MongoDB",
                "PostgreSQL",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
