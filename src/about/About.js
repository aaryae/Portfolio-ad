import React, { useEffect } from 'react'
import "./about.css"
import ScrollReveal from 'scrollreveal';
import pdf from "./Resume.pdf"
import Height100 from '../Height100';


const About = () => {
   
    useEffect(() => {
        const image = document.querySelector('.imagehoni');
        const content = document.querySelector('.aboutstart');

        const sr = ScrollReveal({
            distance: '65px',
            duration: 2600,
            delay: 450,
            reset: true
        });

        sr.reveal(image, { delay: 200, origin: 'top' });
        sr.reveal(content, { delay: 300, origin: 'top' });
    }, []);

    return (
        <>
           <Height100/>
        <div className="imagehoni">
            {/* <img  className="real" src={aarya} alt="pho"  width="600" /> */}
            <p>Hi, my name is </p>
            <h1>Aaryae.</h1>
            
            <br />
            <h2>I am a CS Student.</h2>
            <p className='design'>Building bridges between ideas and innovation through code.</p>
            <p className='design'> DESIGNER & DEVELOPER .</p>
            <div className='centerhoni'>
            <div class="wrapper">
  <div class="link_wrapper">
    <a className='bts' href="/">CONTACT ME</a>
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
  </div>
  
</div>
            </div>
        </div>
        <Height100/>
        <Height100/>
        <Height100/>
           
        <div className='aboutstart'>
        <h1>About me</h1>
        <div className="herostart">
            <p>
               &nbsp; &nbsp;
Hello, I'm Aaryae. In the world of technology, I've embarked on a journey fueled by curiosity and a relentless pursuit of knowledge. My skill set is diverse, ranging from foundational web technologies like HTML, CSS, and JavaScript to more advanced frameworks like React.js and Next.js. I'm also proficient in languages like C++ and C#, which allow me to delve into software development beyond the web. GitHub is my playground for collaboration and version control.
<br />
<br />
&nbsp;&nbsp;I firmly believe that coding is not just about writing lines of code; it's about harnessing the power of technology to bring ideas to life and tackle real-world challenges. My passion for technology is evident in my commitment to continuous learning and staying abreast of the latest advancements in the field.
<br />
<br />
&nbsp;&nbsp;If you're interested in connecting or have an exciting opportunity to discuss, feel free to reach out to me at <a target="blank" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqXPXTLgrzbCdhbwTCDSqbPpJcgcPFGtmsFQDljkNSCRGTnDfHphTZjXDDvVgrgJVKCzvB">aaryaed@gmail.com</a>. I thrive on new challenges and am always eager to explore fresh avenues in the ever-evolving landscape of technology.
               
            </p>
            <a href={pdf} download={pdf} class="contact-button">Download CV</a>        </div>
            </div>
        </>
    )
}

export default About