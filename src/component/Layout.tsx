import React from "react";
import { Navigation } from "./Navigation";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <Navigation />
      <section className="py-24">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
