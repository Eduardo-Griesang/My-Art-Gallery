import { Link } from 'react-router-dom'
import './About.css'
import { useEffect, useRef } from 'react'
import { useAnimation, useInView, motion } from 'framer-motion'
import AboutText from '../AboutText'

const About = () => {

    const aboutRef = useRef(null)
    const aboutInView = useInView(aboutRef, {once:true})
    const aboutAnimate = useAnimation()

    useEffect(() => {
        if(aboutInView){
            aboutAnimate.start("visible")
        }
    },[aboutInView])

    return(
        <section ref={aboutRef}>
            <motion.section className='about' 
                variants={{
                    hidden: {y:150, opacity:0.9},
                    visible: {y: 0, opacity:1}
                }}
                initial= "hidden"
                transition={{duration: 1}}
                animate={aboutAnimate}
            >
                <h4 className='about-title'>
                    About The Gallery
                </h4>
                
                <section className='about-text-area'>
                    <AboutText text="This is a project that I built in React.js with the initial intention of using it personally to help me keep a record of my favorite paintings and why they 
                        matter to me. Recently, I've developed an interest in investing in modern art, and that's why I decided to build this application. It allows me to organize 
                        and document the paintings I enjoy." />
                    
                    <AboutText text="However, I then realized that this could be more than just a personal tool. So, I used this project to learn how to build a Node.js API and deployed it 
                        on Heroku so that everyone can add their favorite art and share it with others." />

                    <AboutText text="So feel free to add your favorite art piece and share it with the world!" />
                </section>
        
                <Link to={'/AddArt'} className='about-btn'>Add art</Link>
            </motion.section>
        </section>
        
    )
}

export default About