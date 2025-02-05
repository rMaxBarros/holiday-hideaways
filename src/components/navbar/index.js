import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/"><img src="../../images/holiday-hideways-dark-header-logo.svg" alt="LOGO HOLIDAY HIDEAWAYS" /></Link>
            <div className="container-navbar-links">
                <Link to="/">HOME</Link>
                <Link to="/favorites">FAVORITOS</Link>
            </div>
        </nav>
    )
}

export default NavBar;
