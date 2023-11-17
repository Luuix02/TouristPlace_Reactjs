import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};

export const NavigationProvider = ({ children }) => {
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <NavigationContext.Provider value={{ nav, openNav, closeNav }}>
      {children}
    </NavigationContext.Provider>
  );
};

