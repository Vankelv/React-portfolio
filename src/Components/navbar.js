import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import { Row, Col } from 'react-bootstrap';
import LogoImage from '../images/Logo.png';

import "../styles/main.css"

function Navbar() {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <Col xs={12} md={4} className="text-center">
          <img src={LogoImage} alt="Van logo" />
        </Col>
            <nav ref={navRef}>
                <Link to="home" smooth={true} duration={500} onClick={() => showNavbar()}>Home</Link>
                <Link to="portfolio" smooth={true} duration={400} onClick={() => showNavbar()}>My work</Link>
                <Link to="about" smooth={true} duration={500} onClick={() => showNavbar()}>About</Link>
                <button className="nav-contact" ><a href="/#">Contact me</a></button>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
