import Title from "../../components/Title";
import "./Content.css";

const Content = ({contentTitle, artPhoto, contentDescription, contentArt}) => {
  return (
    <section className="container-content">
      <Title title={contentTitle} />
      <img src={ artPhoto } alt={ contentTitle } className="content-img" />
      <div className="content-div">
        <p>{ contentDescription }</p>
        <p>{ contentArt }</p>
      </div>
    </section>
  );
};

export default Content