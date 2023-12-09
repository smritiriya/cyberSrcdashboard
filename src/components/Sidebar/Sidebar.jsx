// import { ReactComponent as Applogo } from "./blueBox.svg";
// import "./Sidebar.scss";

// function Sidebar() {
//   return (
//     <div className="sidebar-container">
//       <div className="sidebar-logo-container">
//         <Applogo />
//       </div>
      
//     </div>
//   )
// }

// export default Sidebar;
import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand" style={{ textAlign: "center" }}>
          <BsCart3 className="icon_header" /> BlueBox
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom:"15px"
          }}
        >
          <div>
            {" "}
            <img
              src="user.png"
              alt=""
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          </div>
          <div>
            <h3 style={{ margin: "5px" }}>Riya Smriti</h3>
            <p style={{ margin: "5px" ,fontSize:"10px" }}>smritiriya7@gmail.com</p>
          </div>
        </li>
        <li className="sidebar-list-item">
          {/* <a href=""> */}
          <a href="">Dashboard</a>

          <BsGrid1X2Fill className="icon" />
          {/* </a> */}
        </li>
        <li className="sidebar-list-item">
          <a href="">Products</a>
          <BsFillArchiveFill className="icon" />
        </li>
        <li className="sidebar-list-item">
          <a href="">Categories</a>
          {/* <a href=""> */}
          <BsFillGrid3X3GapFill className="icon" />
          {/* </a> */}
        </li>
        <li className="sidebar-list-item">
          <a href="">Customers</a>
          {/* <a href=""> */}
          <BsPeopleFill className="icon" />
          {/* </a> */}
        </li>
        <li className="sidebar-list-item">
          <a href="">Inventory</a>
          {/* <a href=""> */}
          <BsListCheck className="icon" />
          {/* </a> */}
        </li>
        <li className="sidebar-list-item">
          <a href="">Reports</a>
          {/* <a href=""> */}
          <BsMenuButtonWideFill className="icon" />
          {/* </a> */}
        </li>
        <li className="sidebar-list-item">
          <a href="">Setting</a>
          {/* <a href=""> */}
          <BsFillGearFill className="icon" />
          {/* </a> */}
        </li>
        <li className="sidebar-list-item">
          <button
            style={{
              width: "90%",
              padding: "15px",
              color: "white",
              backgroundColor: "#4FBFCE",
              border: "none",
              fontSize: "15px",
              borderRadius: "10px",
            }}
          >
            {" "}
            Add Project
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;