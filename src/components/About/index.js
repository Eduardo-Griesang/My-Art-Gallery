import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
    return(
        <section className='about'>
            <h4 className='about-title'>About The Gallery</h4>
            <span className='about-text'>
                This is a project that I built in React.js with the initial intention of using it personally to help me keep a record of my favorite paintings and why they 
                matter to me. Recently, I've developed an interest in investing in modern art, and that's why I decided to build this application. It allows me to organize 
                and document the paintings I enjoy.
            </span>
            <span className='about-text'>
                However, I then realized that this could be more than just a personal tool. So, I used this project to learn how to build a Node.js API and deployed it 
                on Heroku so that everyone can add their favorite art and share it with others.
            </span>
            <span className='about-text'>
                So feel free to add your favorite art piece and share it with the world!
            </span>
            <Link to={'/AddArt'} className='about-btn'>Add art</Link>
        </section>
    )
}

export default About