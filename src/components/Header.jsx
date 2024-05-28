import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="navitems">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/aboutus"}>About Us</Link></li>
          <li > <Link to={"/contactus"}>Contact Us</Link></li>
          <li>Cart</li>
          <li>
            <button
              className="loginBtn"
              onClick={() => setIsLoggedin(!isLoggedin)}
            >
              {isLoggedin ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
