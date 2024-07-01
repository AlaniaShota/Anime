import React, { useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { HamburgerMenu } from "./HamburgerMenu";

export const Layout = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 530);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? <HamburgerMenu /> : <Navigation />}
      <section className="py-24 max-sm:py-8">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
