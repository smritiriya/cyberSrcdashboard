import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <div style={{ display: "flex", alignItems: "Center" }}>
          {" "}
          <BsSearch className="icon" />{" "}
          <p style={{ fontSize: "15px" }}>Search Projects</p>
        </div>
      </div>
      <div
        className="header-right"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "15%",
        }}
      >
        <div>
          {" "}
          <img
            src="user.png"
            alt=""
            style={{ width: "25px", height: "25px", borderRadius: "50%" }}
          />
        </div>
        <div>
          {" "}
          <BsFillBellFill className="icon" />
        </div>
        <div>
          {" "}
          <BsFillEnvelopeFill className="icon" />
        </div>
        <div>
          {" "}
          <BsPersonCircle className="icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
