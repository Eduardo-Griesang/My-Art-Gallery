import { Link } from "react-router-dom"
import "./MenuBar.css"


const MenuBar = () => {
    return(
        <nav className="menu-bar">
            <ul className="menu-bar-ul">
                <li>
                    <Link to={'/'} className="menu-bar-a">Home</Link>
                </li>
                <li>
                    <Link to={'/paintings'} className="menu-bar-a">Painting</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MenuBar