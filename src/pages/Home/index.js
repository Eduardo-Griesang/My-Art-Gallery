import BigCard from "../../components/BigCard";
import SmallCard from "../../components/SmallCard";
import Title from "../../components/Title";
import "./Home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [art, setArt] = useState([]);

  useEffect(() => {
    getAPI();
  }, []);

  async function getAPI() {
    try {
      const promisse = await fetch("http://localhost:8000/art");
      const data = await promisse.json();
      setArt(data);
    } catch (err) {
      console.error("ERRO: ", err);
    }
  }

  const small = art.slice(1, 4)

  console.log(small)

  return (
    <>
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
    </>
  );
};

export default Home;
