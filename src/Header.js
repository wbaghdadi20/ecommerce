import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

export const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="header-nav">
        <Link to="/login">
          <div className="header-option">
            <span className="header-option-lineOne">Hello Guest</span>
            <span className="header-option-lineTwo">Sign In</span>
          </div>
        </Link>

        <div className="header-option">
          <span className="header-option-lineOne">Returns</span>
          <span className="header-option-lineTwo">& Orders</span>
        </div>

        <div className="header-option">
          <span className="header-option-lineOne">Your</span>
          <span className="header-option-lineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header-option-basket">
            <ShoppingBasket />
            <span className="header-option-lineTwo header-option-basket-count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
