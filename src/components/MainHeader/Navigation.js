import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="https://www.linkedin.com/company/happily-ever-co/" target="_blank" rel="noopener noreferrer">About Us</a>
        </li>
        <li>
          <a href="https://www.happilyever.co/contacts" target="_blank" rel="noopener noreferrer">Contact</a>
        </li>
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
