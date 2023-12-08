import "./Paintings.css";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Painting from "../../components/Painting";
import mock from "../../mock/data.json"


const Paintings = () => {
  const [art, setArt] = useState(mock);

  /*useEffect(() => {
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
  }*/

  if(art.length === 0){
    return <Loading />
  }

  return (
    <section className="bod">
      {art.map((art) => {
        return (
            <Painting art={art} />
        );
      })}
    </section>
  );
};

export default Paintings;
