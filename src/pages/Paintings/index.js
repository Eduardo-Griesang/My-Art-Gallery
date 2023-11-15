import "./Paintings.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Paintings = () => {
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

  return (
    <body className="bod">
      {art.map((art) => {
        return (
            <section className="painting-sec">
                <Link to={`../content/${art.id}`} state={{state:art}}>
                    <div className="paintings-div">
                    <img className="paintings-img" src={art.photo} />
                    <span className="paintings-span">{art.title}</span>
                    </div>
                </Link>
            </section>
        );
      })}
    </body>
  );
};

export default Paintings;
