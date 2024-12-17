import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/Header.js"
import Home from "./components/Home.js"
import About from "./components/About.js"
import Certificates from "./components/Certificates.js"
import Projects from "./components/Projects.js"
import ContactMe from "./components/ContactMe.js"
import Footer from "./components/Footer.js"
import Skills from './components/Skills.js';
import Testimonials from './components/Testimonials.js';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Testimonials />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
