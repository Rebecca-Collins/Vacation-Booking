import { useEffect } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import travel1 from "../../assets/travel1.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  // Scroll animatio
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video
          className="footer__video"
          src={travel1}
          muted
          autoPlay
          loop
          type="video/mp4"
        ></video>
      </div>

      <div className="sec-content-footer container">
        <div className="footer-Contact-Div flex">
          <div data-aos="fade-up" className="footerText">
            <small className="footer__small">KEEP IN TOUCH</small>
            <h2 className="footer__header">Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="footer__icon" />
            </button>
          </div>
        </div>
       
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <Link to="#" className="logo flex">
                <MdOutlineTravelExplore className="footericon" /> Travel.
              </Link>
            </div>
            <div data-aos="fade-up" className="footer__paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              mollitia exercitationem rerum quidem eveniet doloremque delectus
              unde ad corporis quae quo maxime nesciunt accusantium veritatis
              impedit nam, repudiandae eaque? Consequatur.
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footer__links grid">
            {/* Group One */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footer__list">
                <FiChevronRight className="footer__icon" />
                Services
              </li>

              <li className="footer__list">
                <FiChevronRight className="footer__icon" />
                Insurance
              </li>

              <li className="footer__list">
                <FiChevronRight className="footer__icon" />
                Agency
              </li>

              <li className="footer__list">
                <FiChevronRight className="footer__icon" />
                Tourism
              </li>

              <li className="footer__list">
                <FiChevronRight className="footer__icon" />
                Payment
              </li>
            </div>

            {/* Group two */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>
              <li className="footer__list">
                <FiChevronRight className="footer__icon" />
                Bookings
              </li>

              <li className="footer__list">
                <FiChevronRight className="footer__icon" />
                Rentcars
              </li>

              <li className="footer__list">
                <FiChevronRight className="footer__icon" />
                HostelWorld
              </li>

              <li className="footer__list">
                <FiChevronRight className="footer__icon" />
                Trivago
              </li>

              <li className="footer__list">
                <FiChevronRight className="footer__icon" />
                TripAdvisor
              </li>
            </div>

            {/* Group three */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">Last MINUTE</span>
              <li className="footer__list">
                <FiChevronRight className="footer__icon" />
                London
              </li>

              <li className="footer__list">
                <FiChevronRight className="footer__icon" />
                California
              </li>

              <li className="footer__list">
                <FiChevronRight className="footer__icon" />
                Brazil
              </li>

              <li className="footer__list">
                <FiChevronRight className="footer__icon" />
                Europe
              </li>

              <li className="footer__list">
                <FiChevronRight className="footer__icon" />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
          <small>BEST TRAVEL WEBSITES THEME</small>
          <small>COPYRIGHTS RESERVED - CS WEB CREATION 2023</small>
        </div>

        </div>
      </div>
    </section>
  );
}

export default Footer;
