import React, { useEffect } from 'react'
import "./about.css"
// import aarya from "../Images/aarya.jpg"
import ScrollReveal from 'scrollreveal';
import pdf from "./resume.pdf"
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
            
            <h1>Aaryae.
            </h1>
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
       
        <div className='aboutstart'>
            <div className="kxa">
            <h1>About me</h1>
            <p>
               &nbsp; &nbsp; Hello, I'm Aaryae. My journey in the realm of technology is marked by a
                 diverse set of skills and a continuous thirst for learning. My skills 
                 encompass a wide range, including HTML, CSS, JavaScript, C++, React.js,
                  Next.js, GitHub, and C#. I believe in the power of coding to bring ideas 
                  to life and solve real-world problems. </p>
                  <br />
                  <p>
                   My passion for technology is 
                  reflected in my dedication to expanding my skill set and staying updated
                   with the latest advancements. You can reach out to me at 
                    at <a target="blank" href="https://mail.google.com/mail/u/0/#inbox">aaryaed@gmail.com</a> , 
                   and I'm always open to new challenges and opportunities.
            </p>
            <a href={pdf} download={pdf} class="contact-button">Download CV</a>        </div>
        </div>
        </>
    )
}

export default About