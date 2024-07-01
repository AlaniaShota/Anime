import React, { useEffect, useState, createContext, useContext } from "react";

// Create a context for the mobile state
const MobileContext = createContext(false);

export const useMobile = () => {
  return useContext(MobileContext);
};

export const MobileProvider = ({ children }) => {
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
    <MobileContext.Provider value={isMobile}>
      {children}
    </MobileContext.Provider>
  );
};
