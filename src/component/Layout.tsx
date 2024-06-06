import React from "react";
import { Navigation } from "./Navigation";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <section>
        <Outlet />
      </section>
    </div>
  );
};
