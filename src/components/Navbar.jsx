import React, {useState} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-scroll';


function Navbar() {
    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50){
            setnav(true);
        } 
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={nav ? 'nav active' : "nav"}>
            <Link to='#' className="logo">
                {/* <img src={logo} alt="logo" /> */}
                <span className="logo">LOGO</span>
            </Link>
            <input className="menu-btn" type="checkbox"  id="menu-btn"/>
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li to="#"><Link>Home</Link></li>
                <li to="#"><Link>Features</Link></li>
                <li to="#"><Link>About</Link></li>
                <li to="#"><Link>Pricing</Link></li>
                <li to="#"><Link>Contact</Link></li>
               
            </ul>
        </nav>
    )
}

export default Navbar
