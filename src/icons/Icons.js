import React, { useEffect } from 'react'
import "./Icons.css"
import ScrollReveal from 'scrollreveal';

const Icons = () => {
    
    useEffect(() => {
       
        const icons=document.querySelector(".icons-main")  
    const sr=ScrollReveal({
       distance:'65px',
       duration:2600,
       delay:450,
       reset:false
    });
    sr.reveal(icons,{delay:400, origin:'left'});
      
    }, []);

    return (


        <div className='icons-main'>

           <a href="https://www.linkedin.com/in/aarya-dangol-658871273/"><i class="fa-brands fa-linkedin-in" height="1000"></i></a> 
          <a href="https://github.com/aaryae"> <i class="fa-brands fa-github"></i></a>  
           <a href="https://www.instagram.com/aaryae_/"><i class="fa-brands fa-instagram"></i></a> 
           <a href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i></a> 
        </div>
    )
}

export default Icons