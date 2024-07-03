import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
      <div className="header-search">
        <input className="header-search-input" type="text">
          {/*logo*/}
        </input>
      </div>
      <div className="header-nav">
        
      </div>
    </div>
  );
};

export default Header;