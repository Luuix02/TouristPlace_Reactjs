import { NavLink } from "react-router-dom"; //Se importa para crear enlaces de navegación en el proyecto.
import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi'; //Importa el icono HiMenuAlt3 de la biblioteca react-icons/hi. Este icono se utiliza como un ícono de menú en  la navegación.
import { useNavigationContext } from '../../Context/index.jsx';//Importa el hook useNavigationContext desde un contexto de navegación. A través de este hook se puede acceder al estado de navegación.


const Navbar = () => { // Definir elemento de interfaz, en este caso  un navbar
    const activeStyle = 'underline underline-offset-4'; //Se definió variable con algunos estilos de tailwindcss
    const { nav, openNav, closeNav } = useNavigationContext(); //Se usa el hook useNavigationContext para obtener el estado de navegación (nav) con funciones como openNav y closeNav desde el contexto de navegación.

    const handleMenuClick = () => {
        nav ? closeNav() : openNav()//Condición ternaria
    };
//Se definió una función de flecha llamada handleMenuClick que se activa cuando se hace clic en el icono de menú en la barra de navegación. La función verifica el estado de nav y llama a closeNav si nav es true, de lo contrario, llama a openNav.
    

const handleNavLinkClick = () => {
        closeNav();
    };
// Se definió una función de flecha llamada handleNavLinkClick que se activa cuando se hace clic en cualquiera de los enlaces de navegación. La función llama a closeNav, haciendo que se cierre la navegación. La funcionalidad es cerrar la barra de navegación después de hacer clic en un enlace.

    return (
       
        <div className='absolute w-full flex justify-between p-4 items-center'>
            <HiMenuAlt3 onClick={handleMenuClick} className='z-20 text-white cursor-pointer' size={25}
             //Se hace uso de la función para abrir y cerrar el menú de navegación como ya se indicó anteriormente.
             />
           
            <div className={
                nav
                    ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/100 px-4 py-7 flex-col z-10'
                    : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
                  //Esto indica una condicional ternaria. Si nav es verdadero, se aplicarán las clases del primer conjunto (antes de :), de lo contrario, se aplicarán las clases del segundo conjunto (después de :). 
                    
            }
            onClick={handleNavLinkClick}>
                 
                <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                <li className="font-bold text-8xl p-8 -mt-20 text-white/100"> 
                       <h1> Welcome to TRAVELING</h1>
                       <img className="w-[120px] rounded-full mt-[-100px] mx-[-130px]" src="https://img.freepik.com/vector-gratis/logotipo-viaje-detallado_23-2148616611.jpg" 
                       alt="" 
                       />
                    </li>
                    <li className='font-bold text-3xl p-10 text-white'>
                    
                        <NavLink to='/Home '
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={handleNavLinkClick}
                            
                        >
                             
                            Home
                        </NavLink>
                    </li>
                    <li className='font-bold text-3xl p-10 text-white'>
                        <NavLink to='/TouristPlaces'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={handleNavLinkClick}
                        >
                           Tourist place
                        </NavLink>
                    </li>
                    <li className='font-bold text-3xl p-10 text-white'>
                        <NavLink to='/Cities'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={handleNavLinkClick}
                        >
                            Cities
                        </NavLink>
                    </li>
                    <li className='font-bold text-3xl p-10 text-white'>
                        <NavLink to='/Biography'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={handleNavLinkClick}
                        >
                            Biography
                        </NavLink>
                    </li>
                 
                </ul>
            </div>

        </div>
    );
};

export default Navbar;
