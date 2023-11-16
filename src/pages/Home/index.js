import BigCard from "../../components/BigCard";
import SmallCard from "../../components/SmallCard";
import Title from "../../components/Title";
import "./Home.css";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Loading from "../../components/Loading";
import About from "../../components/About";

const Home = () => {
  const [art, setArt] = useState([]);

  useEffect(() => {
    getAPI();
  }, []);

  async function getAPI() {
    try {
      const promisse = await fetch("https://art-gallery-api-fdf75ed882d3.herokuapp.com/art");
      const data = await promisse.json();
      setArt(data);
    } catch (err) {
      console.error("ERRO: ", err);
    }
  }

  if(art.length === 0){
    return <Loading title="My Art Gallery" />
  }

  const small = art.slice(1, 4)

  return (
    <section>
      <Title title={"My Art Gallery"} />
      <section className="artigos">
        <div className="artigos-main">
          <BigCard API={art} />
        </div>
        <div className="artigos-other">
          {small.map((e) => {
            return (
                <SmallCard API={e} key={e.id} />
            )
          })}
        </div>
      </section>
      <About />
    </section>
  );
};

export default Home;
