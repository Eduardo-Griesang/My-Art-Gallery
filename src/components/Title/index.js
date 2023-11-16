import { useEffect, useRef } from 'react'
import './title.css'
import { motion, useAnimation, useInView } from 'framer-motion'

const Title = ({ title }) => {

    const TitleRef = useRef(null)
    const titleInView = useInView(TitleRef, {once:true})
    const titleAnimate = useAnimation()

    useEffect(() => {
        if(titleInView){
            titleAnimate.start("visible")
        }
    }, [titleInView])

    return(
        <div className='title-cov' ref={TitleRef}>
            <motion.h1 className='title'
            variants={{
                hidden: {y:50, opacity:0.9},
                visible: {y: 0, opacity:1}
            }}
            initial= "hidden"
            transition={{duration: 0.7}}
            animate={titleAnimate}
            >
                {title}
            </motion.h1>
        </div>
    )
}

export default Title