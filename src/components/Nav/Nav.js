import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import WorkIcon from "@material-ui/icons/Work";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Nav.scss";
const Nav = () => {
  return (
    <div className="Nav-wrapper">
      <img
        src="https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1&_=1618007001039"
        alt="expedia"
      />
      <div className="Nav-links">
        <SearchIcon style={{ color: "#465280" }} />
        <WorkIcon style={{ color: "#465280" }} />
        <AccountCircleIcon style={{ color: "#465280" }} />
      </div>
    </div>
  );
};
export default Nav;
