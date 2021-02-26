import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink activateStyle={{ fontWeight: "bold" }} to="/" exact>
        Home
      </NavLink>
      {" - "}
      <NavLink activateStyle={{ fontWeight: "bold" }} to="/about">
        About
      </NavLink>
      {" - "}
      <NavLink activateStyle={{ fontWeight: "bold" }} to="/discover">
        Discover
      </NavLink>
    </div>
  );
}
