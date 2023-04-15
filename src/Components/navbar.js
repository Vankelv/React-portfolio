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
        <header style={{padding: '10px'}}>
            <Col xs={12} md={6} className="text-center">
          <img src={LogoImage} alt="Van logo" /><span style={{marginLeft: '20px', fontFamily:'Maven pro',fontWeight:'700', color:'#cccaca', fontSize: '16px'}}>Frontend | Branding | IT support</span>
        </Col>
            <nav ref={navRef}>
                <Link to="hero" smooth={true} duration={500} onClick={() => showNavbar()}><a href="#home">Home</a></Link>
                <Link to="portfolio" smooth={true} duration={400} onClick={() => showNavbar()}><a href="#portfolio">My works</a></Link>
                <Link to="about" smooth={true} duration={500} onClick={() => showNavbar()}><a href="#about">About</a></Link>
                <div className="close-btn" onClick={() => showNavbar()}>
    <FaTimes />
  </div>
                {/* <button className="nav-contact" ><a href="/#">Contact me</a></button> */}
               
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
