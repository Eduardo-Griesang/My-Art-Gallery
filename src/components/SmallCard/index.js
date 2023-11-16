import { Link } from "react-router-dom"
import "./SmallCard.css"

const SmallCard = ({API}) => {

    const {photo, title, description, id} = API

    const shortDescription = description.split('.')[0]

    return (
        <div>
            <section className="small-card">
                <img src={photo} alt={title} className="small-card-img" />
                <div>
                    <Link to={`/content/${id}`} state={{state:API}}>
                        <h2 className="small-card-h2">{title}</h2>
                        <p className="small-card-p">{shortDescription}</p>
                    </Link>
                </div>
            </section>
            {id != 4 ? <div className="bord"></div> : <></> }   
        </div>
    )
}

export default SmallCard