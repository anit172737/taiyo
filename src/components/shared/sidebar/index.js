import React from "react";
import { NavLink, Outlet, useMatch } from "react-router-dom";
import "../../sass/Sidebar.scss";

const Sidebar = () => {
  const contactMatch = useMatch("/contact");
  const aboutMatch = useMatch("/charts-and-maps");
  return (
    <div className="sidebar">
      <div className="sidebar__nav">
        <NavLink
          to="/"
          className="sidebar__nav--navlink"
          style={{
            fontWeight: "800",
            color: "white",
            height: "85px",
            display: "grid",
            alignItems: "center",
          }}
        >
          @TAIYO@
        </NavLink>
        <NavLink
          to="/contact"
          exact
          //   activeClass="sidebar__nav--navlink-active"
          //   className="sidebar__nav--navlink"
          className={
            contactMatch
              ? "sidebar__nav--navlink-active"
              : "sidebar__nav--navlink"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/charts-and-maps"
          //   className="sidebar__nav--navlink"
          //   activeClass="sidebar__nav--navlink-active"
          className={
            aboutMatch
              ? "sidebar__nav--navlink-active"
              : "sidebar__nav--navlink"
          }
        >
          Charts & Maps
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default Sidebar;
