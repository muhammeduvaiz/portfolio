
import './App.css';
import Background from './components/Background';
import Home from './components/Home';
import Navbar from './components/nav';
import Projects from './components/projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <div>
        <Background />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Contact />
      </div>
    </>

  );
}

export default App;
