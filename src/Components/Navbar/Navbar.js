import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

function Navbar() {
  const [active, setActive] = useState("navbar");

  // Function to toggle navbar
  const showNav = () => {
    setActive("navbar activeNavbar");
  };
  // Function to close navbar
  const closeNavbar = () => {
    setActive("navbar ");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex" onClick={scrollToTop}>
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
            <button className="btn btnLink">
              <Link>BOOK NOW</Link>
            </button>
          </ul>
          <div onClick={closeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </nav>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>

{/* nav links for tablet size and bigger */}
<nav className="nav-tablet flex">
          <ul className="nav-tablet__list">
            <li className="nav-tablet__item">
              <Link to="/" className="nav-tablet__link">
                Home
              </Link>
            </li>

            <li className="nav-tablet__item">
              <Link to="/" className="nav-tablet__link">
                Packages
              </Link>
            </li>

            <li className="nav-tablet__item">
              <Link to="/" className="nav-tablet__link">
                Shop
              </Link>
            </li>

            <li className="nav-tablet__item">
              <Link to="/" className="nav-tablet__link">
                About
              </Link>
            </li>

            <li className="nav-tablet__item">
              <Link to="/" className="nav-tablet__link">
                Pages
              </Link>
            </li>

            <li className="nav-tablet__item">
              <Link to="/" className="nav-tablet__link">
                News
              </Link>
            </li>

            <li className="nav-tablet__item">
              <Link to="/" className="nav-tablet__link">
                Contact
              </Link>
            </li>
            <button className="nav-tablet__btn btnLink">
              <Link className="nav-tablet__btn-link">BOOK NOW</Link>
            </button>
          </ul>
      </nav>

      </header>
    </section>
  );
}

export default Navbar;
