import { NavLink } from "react-router-dom";
import "./sidebar.css";
import logo from "/arcticons_google-messages.svg";
import logo2 from "/Scrutz.svg";
import { TbBulb } from "react-icons/tb";
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
          <NavLink to="/" className="nav-links">
            <img src="/ri_dashboard-2-line.svg" alt="" /> Overview
          </NavLink>
          <NavLink to="Campaign" className="nav-links">
            <img src="/material-symbols_campaign-outline.svg" alt="" />Campaign
          </NavLink>
          <NavLink to="market-intelligence" className="nav-links">
            <img src="/fluent-mdl2_insights.svg" alt="" />
            Market intelligence
          </NavLink>
          <NavLink to="settings" className="nav-links">
            <img src="/ep_setting.svg" alt="" />
            Account Settings
          </NavLink>
        </div>
        <div className="help">
            <img src="/material-symbols_help-outline.svg" alt="" />
            <div className="title">Need Help?</div>
            <p className="small-text">We are readily available <br /> to provide help</p>
            <button className="outline-btn">Get Help</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
