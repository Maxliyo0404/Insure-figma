import "./Footer.css";
import { IoLocationSharp } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { LiaYoutube } from "react-icons/lia";
function Footer (){
    return (
        <>
          <div className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-titles">
                  <h2 className="footer-title"></h2>
    
                <div className="icons">
                    <div className="icone"><ImFacebook2 /></div>
                    <div className="icone"><FiTwitter /></div>
                    <div className="icone"><ImPinterest2 /></div>
                    <div className="icone"><LiaYoutube /></div>
                </div>
            </div>
                <hr />
                <ul className="footer-list">
                    <li className="footer-item">
                        <a className="footer-links" href="#">OUR COMPANY</a>
                        <a className="footer-link" href="#">HOW WE WORK</a>
                        <a className="footer-link" href="#">WHY INSURE?</a>
                    </li>
                    <li className="footer-item">
                        <a className="footer-links" href="#">HELP ME</a>
                        <a className="footer-link" href="#">FAQ</a>
                        <a className="footer-link" href="#">TERMS OF USE</a>
                    </li>
                    <li className="footer-item">
                        <a className="footer-links" href="#">CONTACT</a>
                        <a className="footer-link" href="#">SALES</a>
                        <a className="footer-link" href="#">SUPPORT</a>
                    </li>
                    <li className="footer-item">
                        <a className="footer-links" href="#">OTHERS</a>
                        <a className="footer-link" href="#">CAREERS</a>
                        <a className="footer-link" href="#">PRESS</a>
                    </li>
                </ul>
                </div>
            </div>
          </div>
        </>
    ) 
}
export default Footer;