import './Paintings.css'
import data from "../../data/ArtData.json"
import { Link } from 'react-router-dom'

const Paintings = () => {
    return (
        <body className='bod'>
            {data.map((art) => {
                return (
                    <Link to={`content/${art.id}`}>
                        <div className='paintings-div'>
                            <img className='paintings-img' src={art.photo} />
                            <span className='paintings-span'>{art.title}</span>
                        </div>
                    </Link>
                )
            })}
        </body>
    )
}

export default Paintings