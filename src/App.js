import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Project from './Projects/Project';
import About from './about/About';
import Footer from './footer/Footer';
import Icons from './icons/Icons';
import Height100 from './Height100';


function App() {
  

  return (
    <>
      <div className="main">
        <Home />
        <Height100/>
        <Icons />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/projects' element={<Project/>}/>
    </Routes>
    </BrowserRouter>

        <Footer />
        
      </div>
    </>
  );
}

export default App;
