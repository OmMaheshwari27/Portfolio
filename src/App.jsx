import './App.css'
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <ThemeProvider>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
