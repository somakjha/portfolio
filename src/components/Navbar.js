import { useState } from "react";
import '../styles/stylesComp/Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <h3 onClick={pageUp} className="logo">
          somak
        </h3>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
          <a className='hb' href="#contact">O</a>
          </li>
        </ul>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => hamburgerMenu()}>
        <a className='xcross' href="#contact">X</a>
        </span>

        <ul>
          <li onClick={() => hamburgerMenu()}>
            <a href="#home">Home</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#about">About</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#projects">Projects</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
