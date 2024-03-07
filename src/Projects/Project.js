import React from 'react'
import "./project.css"
import consultant from "../Images/consultant.png"
import egov from "../Images/egov.png"
import royallooks from "../Images/royallooks.png"
import xchange from "../Images/xchange.png"

const Project = () => {
  return (
    <div className="mainproject" >
        <hr className='newhoni' />
    <div className='projecthoni' >
        
        <div className="p1">
            <div className="p-image">
                <img src={royallooks} alt="ad" height="50" />
               <a  target="blank" href="https://github.com/aaryae/BeautysaloonWebsite"> <h1>Beauty Saloon Website</h1></a>
            </div>
            <div className="p-content">
                <p> - Created with HTML, CSS, and vanilla JavaScript, this aesthetically pleasing website facilitates the seamless purchase of cosmetic products.</p>
            </div>
        </div>
        <div className="p1">
            <div className="p-image">
                <img src={egov} alt="ad" height="50" />
               <a target="blank" href="https://github.com/aaryae/E-gov"> <h1>Government Complain Register</h1></a>
            </div>
            <div className="p-content">
                <p> - Created a dynamic and user-friendly e-Government website
                     using a powerful combination of HTML, CSS, JavaScript, and Django allowing citizens to register interactive complaints anonymously with image attachments, enhancing transparency and user engagement.</p>
            </div>
        </div>

        <div className="p1">
            <div className="p-image">
                <img src={xchange} alt="ad" height="50"/>
                <a  target="blank" href="https://github.com/TeamPWNED/bookxchange-frontend"><h1>BookXchange</h1></a>
            </div>
            <div className="p-content">
                <p> - Second hand book sharing app created with React JS and Django. Uses credit points for transaction.</p>
            </div>
        </div>
        <div className="p1">
            <div className="p-image">
                <img src={consultant} alt="ad" height="50" />
                <a target="blank" href="https://github.com/aaryae/Reactlicious-Recipe"><h1>Reactlious-Recipie</h1></a>
            </div> 
            <div className="p-content">
                <p> - created a recipie website using React and tailwind using custom json to fetch data .
                    <br />
                    <br />
                    - Visit to my <a target="blank" href="https://github.com/aaryae" >Github</a> profile for more javascript vanilla projects.
                </p>
            </div>
        </div>
    
    </div>
    </div>
  )
}

export default Project;