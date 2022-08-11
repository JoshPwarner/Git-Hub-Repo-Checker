import React from "react";

import { Outlet, NavLink, useNavigate } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {" "}
      <header>
        <h1>Repo Tracker</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>© 2022 Repo Tracker. </p>
        <p>
          &nbsp; Created by <a href="https://github.com/codingKompot">Karolina</a>{", "}
          <a href="https://github.com/joshPwarner">Josh</a> {" "}
          &amp; <a href="https://github.com/aditi2605">Aditi</a>{". "}
        </p>
      </footer>
    </>
  );
};

export default Layout;