import './contact.css';
import Contactcard from '../components/contactcard';

import github from '../assets/github.svg';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';
import linkedin from '../assets/linkedin.svg';

export default function Contact(){
    return(
        <div className="contact" id = "contact">
            <h1>CONTACT</h1>
            <Contactcard />
            <p className="or">OR</p>
            <p className="contacttext">Feel free to reach me out on</p> 
            <div className="links">
                <a href="https://github.com/skrishna9" rel="noreferrer" target="_blank" >
                <img src={github} alt=""/>
                </a>
                <a href="mailto:sharmakri98597@gmail.com" rel="noreferrer" target="_blank" >
                <img src={gmail} alt=""/>
                </a>
                <a href="https://www.instagram.com/hikrishnasharma" rel="noreferrer" target="_blank" >
                <img src={instagram} alt=""/>
                </a>
                <a href="https://www.linkedin.com/mwlite/in/skrishna9" rel="noreferrer" target="_blank" >
                <img src={linkedin} alt=""/>
                </a>
                <a href="tel:9817234981" >
                <img src={whatsapp} alt=""/>
                </a>
            </div>
        </div>
    )
}