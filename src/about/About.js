import React from 'react'
import "./about.css"
import aarya from "../Images/aarya.jpg"
import { saveAs } from 'file-saver'
import ScrollReveal from 'scrollreveal';


const About = () => {
    const handleDownload =()=>{
        const pdfpath = "src/about/resume.pdf"

        fetch(pdfpath)
        .then((response)=>response.blob())
        .then((blob)=>{
            saveAs(blob,'resume.pdf');
        })
        .catch((error)=>console.error('error fetching ',error));

    };
    let image=document.querySelector('.imagehoni')
let content=document.querySelector('.aboutstart')

const sr=ScrollReveal({
    distance:'65px',
    duration:2600,
    delay:450,
    reset:false
});

sr.reveal(image,{delay:200, origin:'top'});
sr.reveal(content,{delay:300, origin:'top'});

    return (
        <>
            <hr  className='hr'/>
        <div className="imagehoni">
            <img  className="real" src={aarya} alt="pho"  width="600" />

        </div>
        <div className='aboutstart'>
            <div className="kxa">
            <h1>A Bit About Me</h1>
            <p>
               &nbsp; &nbsp; Hello, I'm Aaryae. My journey in the realm of technology is marked by a
                 diverse set of skills and a continuous thirst for learning. My skills 
                 encompass a wide range, including HTML, CSS, JavaScript, C++, React.js,
                  Next.js, GitHub, and C#. I believe in the power of coding to bring ideas 
                  to life and solve real-world problems.
                  <br />
                   My passion for technology is 
                  reflected in my dedication to expanding my skill set and staying updated
                   with the latest advancements. You can reach out to me at 
                    at <a target="blank" href="https://mail.google.com/mail/u/0/#inbox">aaryaed@gmail.com</a> , 
                   and I'm always open to new challenges and opportunities.
            </p>
            <button  onClick={handleDownload} class="contact-button">Download CV </button>
        </div>
        </div>
        </>
    )
}

export default About