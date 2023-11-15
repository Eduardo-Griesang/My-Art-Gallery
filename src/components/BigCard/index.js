import "./BigCard.css";

import { Link } from "react-router-dom";

const BigCard = ({ API }) => {

  const art = API.find((art) => art.id === 1) || API[0] || {}

  if(!art){
    return <span>Loading...</span>
  }

  const {photo, title, description, id} = art

  return (
    <div className="container-big-card">
      <img src={photo} alt={ title } className="big-card-img" />
      <Link to={`content/${id}`} state={{state:art}}>
        <h2 className="big-card-h2">{ title }</h2>
        <p className="big-card-p">{ description }</p>
      </Link>
    </div>
  );
};

export default BigCard;
