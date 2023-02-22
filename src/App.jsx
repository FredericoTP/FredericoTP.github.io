import Navbar from "./components/Navbar";
import Introduction from "./pages/Introduction";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import './style/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
