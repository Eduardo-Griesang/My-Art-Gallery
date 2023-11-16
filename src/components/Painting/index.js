import { useEffect, useRef } from 'react'
import './Painting.css'
import { useAnimation, useInView, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Painting = ({ art }) => {

    const artRef = useRef(null)
    const artInView = useInView(artRef, {once:true})
    const artAnimate = useAnimation()

    useEffect(() => {
        if(artInView){
        artAnimate.start("visible")
        }
    },[artInView])

    return(
        <section className="painting-sec" key={art.id} ref={artRef}>
            <Link to={`../content/${art.id}`} state={{state:art}}>
                <motion.div className="paintings-div"
                    variants={{
                    hidden: {y:100, opacity:0.9},
                    visible: {y:0, opacity:1}
                    }}
                    initial="hidden"
                    transition={{duration: 1.2}}
                    animate={artAnimate}
                >
                    <img className="paintings-img" src={art.photo} />
                    <span className="paintings-span">{art.title}</span>
                </motion.div>
            </Link>
        </section>
    )
}

export default Painting