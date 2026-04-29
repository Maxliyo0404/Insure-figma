import "./SectionTwo.css";
import two_line from "./image/two_line.svg";
function SectionTwo (){
    return (
        <>
          <div className="sectionTwo">
            <div className="container">
                <div className="sectionTwo-wrapper">
                    <div className="two-left">
                        <h2 className="two-name">Find out more?about how we work</h2>
                    </div>
                     <div className="two-right">
                        <img className="two-rasm" src={two_line} alt="rasm" />
                        <button className="two-btn">HOW WE WORK</button>
                      </div>
                   </div>
            </div>
          </div>
        </>
    )
}
export default SectionTwo;