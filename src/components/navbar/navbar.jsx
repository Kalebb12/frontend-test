import "./navbar.css"
const Navbar = () => {
    return ( 
        <section className="navbar-section">
            <div className="navbar">
                <input type="text" placeholder="search for anything..." />

                <div className="items">
                    <div className="notification">
                        <img src="/ic_outline-notifications.svg" alt="notification" />
                    </div>
                    <div className="user">
                        <img src="/Ellipse 1.svg" alt="user" />
                        <div className="info">
                            <p className="user-name">BigTech</p>
                            <img src="/mdi_chevron-down.svg" alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Navbar;