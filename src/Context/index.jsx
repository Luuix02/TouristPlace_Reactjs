import React, { createContext, useContext, useState } from 'react'; //createContext se utiliza para crear un contexto, useContext para acceder al valor del contexto y useState para gestionar el estado local.

const NavigationContext = createContext();//Su uso de este contexto es para proporcionar el estado de la navegación y funciones asociadas a los componentes que lo consuman.

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};
//Se define un hook llamado useNavigationContext. Este hook se utilizará para acceder al valor del contexto NavigationContext en otros componentes sin tener que usar useContext directamente.
export const NavigationProvider = ({ children }) => {
  const [nav, setNav] = useState(false);//Este declaración contiene el estado de navegación.

  const openNav = () => setNav(true);//Estado de navegación true
  const closeNav = () => setNav(false);//Estado de navegación false
//Se declaran funciones para abrir y cerrar la navegación
  return (
    <NavigationContext.Provider value={{ nav, openNav, closeNav }}>
      {children}
    </NavigationContext.Provider>
  );
};

