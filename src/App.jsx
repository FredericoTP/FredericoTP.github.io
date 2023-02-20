import Header from "./components/Header";
import Introduction from "./pages/Introduction";
import About from "./pages/About";
import Projects from "./pages/Projects";
import './style/App.css';

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <About />
      <Projects />
    </div>
  );
}

export default App;
