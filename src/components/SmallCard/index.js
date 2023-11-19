import { Link } from "react-router-dom"
import "./SmallCard.css"
import { useEffect, useRef } from "react"
import { useAnimation, useInView, motion } from "framer-motion"

const SmallCard = ({API}) => {

    const smallRef = useRef(null)
    const smallInView = useInView(smallRef, {once:true})
    const smallAnimate = useAnimation()

    useEffect(() => {
        if(smallInView){
            smallAnimate.start("visible")
        }
    },[smallInView])

    const {photo, title, description, id} = API

    const shortDescription = description.split('.')[0]

    return (
        <div ref={smallRef}>
            <motion.section className="small-card"
            variants={{
                hidden: {x: 150},
                visible: {x: 0}
            }}
            initial= "hidden"
            transition={{duration:1}}
            animate={smallAnimate}
            >
                <img src={photo} alt={title} className="small-card-img" />
                <div>
                    <Link to={`/content/${id}`} state={{state:API}}>
                        <h2 className="small-card-h2">{title}</h2>
                        <p className="small-card-p">{shortDescription}</p>
                    </Link>
                </div>
            </motion.section>
            {id != 4 ? <div className="bord"></div> : <></> }   
        </div>
    )
}

export default SmallCard