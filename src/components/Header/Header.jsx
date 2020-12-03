import React from 'react';
import classes from "./Header.module.css";

const Header = () => {
	return <header className ={classes.header}>
         <img src={require("./../../assets/main-logo.png")}/>
      </header>;
}

export default Header;