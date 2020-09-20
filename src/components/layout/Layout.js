import React from "react";

import Header from "../header/Header";
import HeaderContent from "../header/HeaderContent";

import "./_layout.scss";

const Layout = ({ children }) => {
  return (
    <section className="layout_container">
      <Header>
        <HeaderContent />
      </Header>
      <section className="layout_content-wrapper">{children}</section>
      <footer>
        <p>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </p>
      </footer>
    </section>
  );
};

export default Layout;
