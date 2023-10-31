import React from "react";
import "./Navbar.css";
import Search_Logo from "../Assets/search.svg";
import Filter_Logo from "../Assets/Filter.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-box">
        <span className="logo-text">LOGO</span>
      </div>
      <div className="search-box">
        <form>
          <img
            src={Search_Logo}
            alt="search-logo"
            className="search-logo-img"
          />
          <input type="text" placeholder="Search here..." />
        </form>
        <div className="filter-box">
          <img src={Filter_Logo} alt="filter" className="filters-logo" />
          <span> Filters</span>
        </div>
      </div>
      <div className="seller-box">
        <span>Become a Seller</span>
      </div>
    </div>
  );
};

export default Navbar;
