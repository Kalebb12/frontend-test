import "./navbar.css"
import notification from "/ic_outline-notifications.svg"
import user from "/Ellipse 1.svg"
import arrow from "/mdi_chevron-down.svg"
const Navbar = () => {
    return ( 
        <section className="navbar-section">
            <div className="navbar">
                <input type="text" className="input-field" placeholder="search for anything..." />

                <div className="items">
                    <div className="notification">
                        <img src={notification} alt="notification" />
                    </div>
                    <div className="user">
                        <img src={user} alt="user" />
                        <div className="info">
                            <p className="user-name">BigTech</p>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Navbar;