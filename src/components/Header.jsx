import React from 'react';
import Logo from '../img/logo.png';
import { MdShoppingBasket } from "react-icons/md";

import Avatar from "../img/avatar.png";



const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary"> 
    <div className="fixed z-50 w-screen p-6 px-16">
        {/* large screen */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
        {/* <Link to={"/"} className="flex items-center gap-2"> */}
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold"> City</p>
        {/* </Link> */}
        </div>

        <ul className="flex flex-col ">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                //   onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                //   onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                //   onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                //   onClick={() => setIsMenu(false)}
                >
                  Service
                </li>
              </ul>

            <div className="relative flex items-center justify-center">
               <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
               <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">2</p>
               </div>
            </div>
            <img src={Avatar} 
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" 
            alt="userprofile" />
        </div>
        


        {/* small screens */}
        <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
}

export default Header;