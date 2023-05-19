import "./Home.scss";
import Main from '../Main/Main';
import video from "../../assets/waterfallVideo.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask} from "react-icons/bs";
import { TbApps } from "react-icons/tb";

function Home() {
  return (
    <>
    <section className="home">
      <div className="overlay"></div>
      <video className='home__video' src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="home__Content home__container">
        <div className="home__textDiv">
          <span className="home__smallText">Our Packages</span>
          <h1 className="home__Title">Search Your Holiday</h1>
        </div>

        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your Destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOption flex">
            <HiFilter className="icon filter-icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div className="homeFooterIcons flex">
          <div className="rightIcons">
      <FiFacebook className="home__icon"/> 
      <AiOutlineInstagram className="home__icon"/> 
      <FaTripadvisor className="home__icon"/> 
          </div>
      
          <div className="leftIcons">
          <BsListTask className="home__icon"/> 
          <TbApps className="home__icon"/> 
          </div>

        </div>

      </div>
    </section>
    <Main/>
    </>
  );
}

export default Home;
