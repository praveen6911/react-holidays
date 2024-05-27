import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
