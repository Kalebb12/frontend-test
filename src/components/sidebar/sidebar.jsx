import { NavLink } from "react-router-dom";
import "./sidebar.css";
import logo from "/arcticons_google-messages.svg";
import logo2 from "/Scrutz.svg";
import { TbBulb } from "react-icons/tb";
import logo1 from"/ri_dashboard-2-line.svg"
import settings from "/ep_setting.svg"
import intelligence from "/fluent-mdl2_insights.svg"
import campaign from "/material-symbols_campaign-outline.svg"
import help from "/material-symbols_help-outline.svg"
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="navs">
        <div className="logo">
          <img src={logo} alt="" />
          <img src={logo2} className="img" alt="" />
        </div>

        <button className="btn green-btn">+ New Campaign</button>

        <div className="links">
          <NavLink to="/React-Task/" className="nav-links">
            <img src={logo1} alt="" /> Overview
          </NavLink>
          <NavLink to="Campaign" className="nav-links">
            <img src={campaign} alt="" />Campaign
          </NavLink>
          <NavLink to="market-intelligence" className="nav-links">
            <img src={intelligence} alt="" />
            Market intelligence
          </NavLink>
          <NavLink to="settings" className="nav-links">
            <img src={settings} alt="" />
            Account Settings
          </NavLink>
        </div>
        <div className="help">
            <img src={help} alt="" />
            <div className="title">Need Help?</div>
            <p className="small-text">We are readily available <br /> to provide help</p>
            <button className="outline-btn">Get Help</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
