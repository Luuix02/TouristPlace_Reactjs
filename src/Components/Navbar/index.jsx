import { NavLink } from "react-router-dom";
import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useNavigationContext } from '../../Context/index.jsx';


const Navbar = () => {
    const activeStyle = 'underline underline-offset-4';
    const { nav, openNav, closeNav } = useNavigationContext();

    const handleNavLinkClick = () => {
        closeNav();
    };

    return (
       
        <div className='absolute w-full flex justify-between p-4 items-center'>
            <HiMenuAlt3 onClick={openNav} className='z-20 text-white cursor-pointer' size={25} />
           
            <div className={
                nav
                    ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/100 px-4 py-7 flex-col z-10'
                    : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
                   
                    
            }>
                 
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
