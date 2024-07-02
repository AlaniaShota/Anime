import React, { useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { HamburgerMenu } from "./HamburgerMenu";
import { useMobile } from "./Mobile";

export const Layout = () => {
  const isMobile = useMobile();
  return (
    <>
      {isMobile ? <HamburgerMenu /> : <Navigation />}
      <section className="py-24 max-lg:py-8">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
