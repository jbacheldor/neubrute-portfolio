import About from "./components/About";
import Path from "./components/duolingo/Path";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div>
      <main>
        <Navigation/>
        <About/>
        <Path/>
      </main>
    </div>
  );
}
