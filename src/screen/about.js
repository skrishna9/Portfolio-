import './about.css'
import pic from '../assets/krishna.jpg'
export default function About(props){

    const h1 = {
       
    }
   
    return(
        <div id="about">
            <h1 style={h1}>About</h1>
            <img className='pictu' src={pic} alt=' '></img>
            <p >
                A geek with awesome personality and skills.
            
            </p>
            <p >
                An adventurer who love challenges and live for it.
            </p>
            <p>
               A machine Learning export and also 
               A Web Developer who builds awesome websites like this.
            </p>
        </div>
    )
}