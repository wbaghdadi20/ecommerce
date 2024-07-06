import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";

export const Header = () => {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-option-lineOne">Hello Guest</span>
          <span className="header-option-lineTwo">Sign In</span>
        </div>

        <div className="header-option">
          <span className="header-option-lineOne">Returns</span>
          <span className="header-option-lineTwo">& Orders</span>
        </div>

        <div className="header-option">
          <span className="header-option-lineOne">Your</span>
          <span className="header-option-lineTwo">Prime</span>
        </div>

        <div className="header-option-basket">
          <ShoppingBasket />
          <span className="header-option-lineTwo header-option-basket-count">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
