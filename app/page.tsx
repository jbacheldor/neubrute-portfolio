import Welcome from "./components/Welcome";
import Path from "./components/duolingo/Path";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <main>
        <Navigation/>
        <Welcome/>
        <Projects/>
        <Path/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}
