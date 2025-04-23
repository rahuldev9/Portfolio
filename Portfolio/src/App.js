
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import { Element } from "react-scroll";
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex justify-around">
    <div className="w-full grid md:grid-row-1">
      <NavBar />
      <div className="w-full">
        <Element name="home"><Home /></Element>
        <Element name="about"><About /></Element>
        <Element name="resume"><Resume /></Element>
        <Element name="contact"><Contact /></Element>
      </div>
    </div>
  </div>
  
  );
}
// import { Link, Element } from "react-scroll";
// import NavBar from "./Components/NavBar";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Resume from "./Components/Resume";
// import Contact from "./Components/Contact";

// export default function Portfolio() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white">
//       <NavBar />
//       <div className="w-full">
//         <Element name="home"><Home /></Element>
//         <Element name="about"><About /></Element>
//         <Element name="resume"><Resume /></Element>
//         <Element name="contact"><Contact /></Element>
//       </div>
//     </div>
//   );
// }