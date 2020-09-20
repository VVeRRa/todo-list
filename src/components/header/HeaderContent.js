import React from "react";
import { ReactComponent as ToDoListIcon } from "../../assets/svg/order.svg";

import "./_headerContent.scss";

import { NavLink } from "react-router-dom";

const HeaderContent = () => {
  return (
    <section className="header-content_container">
      <NavLink to="/">
        <ToDoListIcon />
      </NavLink>
      <h4>My awesome TODO list</h4>
    </section>
  );
};

export default HeaderContent;
