import { useEffect } from "react";
import "./Main.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";

import Aos from "aos";
import "aos/dist/aos.css";




const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.",
  },

  {
    id:2,
    imgSrc: img3,
    desTitle:'Machu Picchu',
    location: 'Peru',
    grade:'CULTURAL RELAX',
    fees:'$600',
    description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate is simply spectacular.'
  },

  {
    id:3,
    imgSrc: img4,
    desTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:`One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is 'lavish' and 'beauty'. Always inters`
  },

  {
    id:4,
    imgSrc: img5,
    desTitle:'Machu Picchu',
    location: 'Peru',
    grade:'CULTURAL RELAX',
    fees:'$600',
    description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate is simply spectacular.'
  },

  {
    id:5,
    imgSrc: img6,
    desTitle:'Machu Picchu',
    location: 'Peru',
    grade:'CULTURAL RELAX',
    fees:'$600',
    description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate is simply spectacular.'
  },

  {
    id:6,
    imgSrc: img7,
    desTitle:'Machu Picchu',
    location: 'Peru',
    grade:'CULTURAL RELAX',
    fees:'$600',
    description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate is simply spectacular.'
  },

  {
    id:7,
    imgSrc: img8,
    desTitle:'Machu Picchu',
    location: 'Peru',
    grade:'CULTURAL RELAX',
    fees:'$600',
    description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate is simply spectacular.'
  },

  {
    id:8,
    imgSrc: img9,
    desTitle:'Machu Picchu',
    location: 'Peru',
    grade:'CULTURAL RELAX',
    fees:'$600',
    description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate is simply spectacular.'
  },

  {
    id:9,
    imgSrc: img10,
    desTitle:'Machu Picchu',
    location: 'Peru',
    grade:'CULTURAL RELAX',
    fees:'$600',
    description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate is simply spectacular.'
  },
];

function Main() {

    // Scroll animatio
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);


  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visted destinations</h3>
      </div>

      <div className="secContent grid">

        {Data.map(
          ({ id,
             imgSrc,
            destTitle,
            location,
            grade,
            fees,
            description 
          }) => {

            return (
              <div key={id} data-aos="fade-up"  className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle}></img>
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="iconLocation" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small className='main__small'>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="iconDetails" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Main;
