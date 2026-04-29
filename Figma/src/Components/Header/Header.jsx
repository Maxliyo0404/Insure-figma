import "./Header.css";
import logos from "./image/logos.svg";
function Header (){
    return(
        <>
          <div className="header">
            <div className="container">
                <div className="header-container">
                    <a className="header-logo" href="#"><img className="logo" src={logos} alt="rasm" /></a>
                    <ul className="header-list">
                        <ul className="header-item">
                        <li><a className="header-link" href="#">HOW WE WORK</a></li>
                        <li><a className="header-link" href="#">Blog</a></li>
                        <li><a className="header-link" href="#">ACCOUNT</a></li>
                    </ul>
                      <button className="header-btn">VIEW PLANS</button>
                    </ul>
                   <div class="bars">
                       <div class="bar"></div>
                       <div class="bar"></div>
                        <div class="bar"></div>
                </div>
                    
                </div>
            </div>
          </div>
        </>
    )
}
export default Header;