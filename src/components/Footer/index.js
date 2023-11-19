import { useEffect, useRef } from "react";
import "./Footer.css";
import { useAnimation, useInView, motion } from "framer-motion";

const Footer = () => {

  const footerRef = useRef(null)
  const footerInView = useInView(footerRef, {once:true})
  const footerAnimate = useAnimation()

  useEffect(() => {
    if(footerInView){
      footerAnimate.start("visible")
    }
  }, [footerInView])

  return (
    <footer ref={footerRef}>
      <motion.section className="footer-wrap"
      variants={{
        hidden: {y:20, opacity:0.7},
        visible: {y:0, opacity:1}
      }}
      initial= "hidden"
      transition={{duration: 1}}
      animate= {footerAnimate}
      >
        <h3 className="footer-h3">By Eduardo</h3>

        <nav className="footer-nav">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/eduardo-griesang/"className="footer-a">
                LinkedIn
              </a>
            </li>
          </ul>
          <ul>
            <li>•</li>
          </ul>
          <ul>
            <li>
              <a href="https://github.com/Eduardo-Griesang"className="footer-a">
                GitHub
              </a>
            </li>
          </ul>
          <ul>
            <li>•</li>
          </ul>
          <ul>
            <li>
              <a href="https://portfolio-eduardo-griesang.vercel.app"className="footer-a">
                Portfolio
              </a>
            </li>
          </ul>
        </nav>
      </motion.section>
    </footer>
  );
};

export default Footer
