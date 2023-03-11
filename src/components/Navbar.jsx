import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../Data";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isTop, setIsTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsTop(window.scrollY > 20);
    });
  }, []);
  return (
    <div
      className={`${
        isTop ? "shadow-lg bg-ghostWhite" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-8 h-8 bg-blue flex items-center justify-center text-white font-bold">
            GS
          </div>
          <p className="text-xl">
            Gabriel <span className="opacity-80">Santos</span>
          </p>
        </div>
        <div className="md:flex hidden items-center gap-6">
          {navLinks.map((navLink) => {
            return  (
              <div key={navLink.id} >
                <a href={`#${navLink.href}`} className="text-[0.95rem]">
                  {navLink.text}
                </a>
                
              </div>             
            );
          })}
          
        </div>
        <HiMenuAlt3
          className="cursor-pointer text-3xl md:hidden"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {toggle && (
        <motion.div
        initial={{x: 500}}
        animate={{x: 0}}
        className="fixed right-0 top-0 bg-blue h-screen text-white w-80"  
        >
        <div className="flex flex-col gap-8 mt-[40%] ml-[30%] "> 
          {navLinks.map((navLink) => {
            return <NavLinks key={navLink.id} {...navLink} />
          })}
        </div>
        <HiX
        className="absolute right-4 text-3xl top-8 cursor-pointer"
        onClick={() => setToggle(!toggle)}
        
        />
  
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
