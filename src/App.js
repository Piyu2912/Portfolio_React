import './style.css';
import Contact from './Contact';
import Header from './Header';
import Poster from './Poster';
import About from './About';
import Project from './Project';
import Resume from './Resume';
import Footer from './Footer';



function App() {
  
  return (
    <div className="App">
        <Header />
        <Poster />
        <About />
        <Project />
        <Resume />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
