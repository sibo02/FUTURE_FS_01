import './App.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
        
    );
}
export default App;