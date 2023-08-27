import React from "react";
import "./header.css";
import Button from "react-bootstrap/Button";

function Header({ user, handleLogOut, handleSignInShow, handleShow }) {
  return (
    <div className="app_header">
      <img
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        className="app_headerImage"
      />
      {user ? (
        <Button
          variant="primary"
          onClick={handleLogOut}
          className="custom-button"
        >
          Log Out
        </Button>
      ) : (
        <div className="app_logon Container">
          <Button
            variant="primary"
            onClick={handleSignInShow}
            className="custom-button"
          >
            SIGN IN
          </Button>
          <span className="spacer"></span>
          <Button
            variant="primary"
            onClick={handleShow}
            className="custom-button"
          >
            SIGN UP
          </Button>
        </div>
      )}
    </div>
  );
}

export default Header;
