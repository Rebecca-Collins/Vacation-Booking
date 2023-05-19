import "./Footer.scss";
import travel1 from '../../assets/travel1.mp4'

function Footer() {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video className='footer__video' src={travel1} muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="secContentFooter container">
        <div className="footerContactDiv flex">
          <div className="footerText">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Footer