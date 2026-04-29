import "./SectionOne.css";
import { IoLocationSharp } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { TiFlashOutline } from "react-icons/ti";
import { TiUserOutline } from "react-icons/ti";
import { FiDollarSign } from "react-icons/fi";

function SectinOne (){
    return (
        <>
          <div className="sectionOne">
            <div className="container">
                <div className="sectionOne-wrapper">
                    <div className="line"></div>
                    <h2 className="one-title">We’re different</h2>
                    <ul className="one-list">
                        <li className="one-item">
                            <div className="icon"><TiFlashOutline /></div>
                            <h3 className="list-title">Snappy Process</h3>
                            <p className="list-text">Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
                        </li>
                        <li className="one-item">
                            <div className="icon"><FiDollarSign /></div>
                            <h3 className="list-title">Affordable Prices</h3>
                            <p className="list-text">We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
                        </li>
                        <li className="one-item">
                            <div className="icon"><TiUserOutline /></div>
                            <h3 className="list-title">People First</h3>
                            <p className="list-text">Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </>
    )
}
export default SectinOne;