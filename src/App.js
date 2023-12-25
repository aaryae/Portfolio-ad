import './App.css';
import Home from './Home/Home';
import Project from './Projects/Project';
import About from './about/About';
import Footer from './footer/Footer';
import Icons from './icons/Icons';


function App() {
  return (
    <>
      <div className="main">
   
        <Home />
        <About />
        <div id="pro"></div>
        <Icons />
        <h1 className='pro'>Projects</h1>
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default App;
