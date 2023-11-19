import "./BigCard.css";

import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const BigCard = ({ API }) => {

  const HomeRef = useRef(null)
  const inView = useInView(HomeRef, {once:true})
  const bigAnimate = useAnimation()

  useEffect(() => {
    if(inView){
      bigAnimate.start("visible")
    }
  }, [inView])

  const art = API.find((art) => art.id === 1) || API[0] || {}

  if(!art){
    return <span>Loading...</span>
  }

  const {photo, title, description, id} = art

  return (
    <section ref={HomeRef}>
      <motion.div className="container-big-card"
      variants={{
            hidden: {y: 170},
            visible: {y: 0}
          }}
          initial="hidden"
          transition={{duration: 1}}
          animate={bigAnimate}
      >
        <img src={photo} alt={ title } className="big-card-img" />
        <Link to={`content/${id}`} state={{state:art}}>
          <h2 className="big-card-h2">{ title }</h2>
          <p className="big-card-p">{ description }</p>
        </Link>
      </motion.div>
    </section>
  );
};

export default BigCard;
