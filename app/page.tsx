import Welcome from "./components/Welcome";
import Path from "./components/duolingo/Path";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <main>
        <Navigation/>
        <Welcome/>
        <Path/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}
