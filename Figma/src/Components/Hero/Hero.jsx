import "./Hero.css";
import hero_rasm from "./image/hero_rasm.svg";
function Hero (){
    return(
         <>
          <div className="hero">
            <div className="container">
                <div className="hero-wrapper">
                   <div className="hero-left">
                    <h2 className="hero-title">Humanizing your insurance.</h2>
                    <p className="hero-text">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                    <button className="hero-btn">VIEW PLANS</button>
                   </div>
                   <div className="hero-right">
                    <img  className="hero-rasm"  src={hero_rasm} alt="rasm" />
                   </div>
                  
                </div>
            </div>
          </div>
        </>
    )
}
export default Hero;