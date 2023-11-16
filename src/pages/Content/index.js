import { useLocation } from "react-router";
import Title from "../../components/Title";
import "./Content.css";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const Content = () => {

  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, {once: true})
  const contentAnimate = useAnimation()

  useEffect(() => {
    if(contentInView){
      contentAnimate.start("visible")
    }
  }, [contentInView])

  let { state } = useLocation()

  const art = state.state

  return (
    <section className="container-content">
      <Title title={art.title} />
      <img src={ art.photo } alt={ art.title } className="content-img" />
      <div ref={contentRef}>
        <motion.text className="content-div"
          variants={{
            hidden: {y: 150},
            visible: {y: 0}
          }}
          initial="hidden"
          transition={{duration: 1}}
          animate={contentAnimate}
        >
          <p>{ art.description }</p>
          <p>{ art.the_art }</p>
        </motion.text>
      </div>
    </section>
  );
};

export default Content