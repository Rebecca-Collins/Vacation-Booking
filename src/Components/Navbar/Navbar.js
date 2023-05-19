import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
function Navbar() {

  const [active, setActive] = useState ('navbar');

// Function to toggle navbar
const showNav = ()=>{
  setActive('navbar activeNavbar')
}
// Function to close navbar
const closeNavbar = ()=>{
  setActive('navbar ')
}

  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="#" className="logo flex">
            <h1>
              {" "}
              <MdOutlineTravelExplore /> Travel.
            </h1>
          </Link>
        </div>
        <nav className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>

            <li className="navItem">
              <Link to="/" className="navLink">
                Packages
              </Link>
            </li>

            <li className="navItem">
              <Link to="/" className="navLink">
                Shop
              </Link>
            </li>

            <li className="navItem">
              <Link to="/" className="navLink">
                About
              </Link>
            </li>

            <li className="navItem">
              <Link to="/" className="navLink">
                Pages
              </Link>
            </li>

            <li className="navItem">
              <Link to="/" className="navLink">
                News
              </Link>
            </li>

            <li className="navItem">
              <Link to="/" className="navLink">
                Contact
              </Link>
            </li>
            <button className='btn btnLink'>
              <Link>BOOK NOW</Link>
            </button>
          </ul>
          <div onClick={closeNavbar} className='closeNavbar'>
          <AiFillCloseCircle className='icon'/>
          </div>
        </nav>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon'/>
        </div>
      </header>
    </section>
  );
}

export default Navbar;
