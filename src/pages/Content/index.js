import { useLocation } from "react-router";
import Title from "../../components/Title";
import "./Content.css";

const Content = () => {

  let { state } = useLocation()

  const art = state.state

  return (
    <section className="container-content">
      <Title title={art.title} />
      <img src={ art.photo } alt={ art.title } className="content-img" />
      <div className="content-div">
        <p>{ art.description }</p>
        <p>{ art.the_art }</p>
      </div>
    </section>
  );
};

export default Content