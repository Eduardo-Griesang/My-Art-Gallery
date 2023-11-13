import { Link } from "react-router-dom"
import "./SmallCard.css"

const SmallCard = ({API}) => {

    const {photo, title, description, id} = API

    const shortDescription = description.split('.')[0]

    console.log(description, shortDescription)

    return (
        <>
            <section className="small-card">
                <img src={photo} alt={title} className="small-card-img" />
                <div>
                    <Link to={`/content/${id}`}>
                        <h2 className="small-card-h2">{title}</h2>
                        <p className="small-card-p">{shortDescription}</p>
                    </Link>
                </div>
            </section>
            <hr></hr>
        </>
    )
}

export default SmallCard