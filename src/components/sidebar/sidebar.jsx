import { NavLink } from "react-router-dom";
import "./sidebar.css"
import logo from "/arcticons_google-messages.svg"
import logo2 from "/Scrutz.svg"
const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="navs">
                <div className="logo">
                    <img src={logo} alt="" />
                    <img src={logo2} alt="" />
                </div>

                <button className="btn green-btn">+ New Campaign</button>

                <div className="links">
                    <NavLink to="/OverView" className="nav-links">Overview</NavLink>
                    <NavLink to="Campaign" className="nav-links">Campaign</NavLink>
                    <NavLink to="market-intelligence" className="nav-links">Market intelligence</NavLink>
                    <NavLink to="settings" className="nav-links">Account Settings</NavLink>
                </div>
            </div>
        </div>
    );
}
 
export default SideBar;