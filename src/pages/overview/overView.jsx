import { BiDownArrow, BiExport } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import "./overView.css"
const OverView = () => {
    return ( 
        <div className="container">
            <div className="head">
                <span className="header">Overview</span>
                <div className="tabs">
                    <div className="custom-date">
                        <div style={{gap:10}}>
                            <SlCalender fill="green"/>
                            Date range
                        </div>
                        <hr />
                        <div className="date">
                            Nov 1, 2022 - Nov 7, 2022.
                            <BiDownArrow fill="green"/>
                        </div>
                    </div>
                    <button className="h-btn"><BiExport fill="green"/> Export</button>
                </div>
            </div>
            <div className="home">
                <img src="/empty-RBIL0twm1B.svg" className="hero-img" alt="" />
                <p>No activity yet, create a new campaign to get started</p>
                <button className="btn green-btn">+ New Campaign</button>
            </div>
        </div>
     );
}
 
export default OverView;