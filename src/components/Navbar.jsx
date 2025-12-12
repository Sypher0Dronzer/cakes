import { TextAlignJustify, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#menu", label: "menu" },
    { href: "/#bestseller", label: "Best Seller" },
    { href: "/#contact", label: "contact Us" },
  ];
  return (
    <div className="fixed z-20 top-0 left-0 right-0 bg-linear-to-b from-[#FEE8F2] to-[#FCEBF3] py-4 px-auto ">
      <div className="2xl:max-w-7xl xl:max-w-[1200px] mx-auto xl:px-0 px-[3vw] sm:px-[5vw] flex justify-between">
        <div className="">LOGO</div>
        {/* ---------------------desktop screens ----------------------- */}
        <ul className="sm:flex hidden justify-center gap-5 uppercase  font-semibold text-[#29100E] [&>*]:hover:text-[#EB6194]">
          {navItems.map((e, i) => {
            return (
              <li key={i}>
                <a href={e.href}>{e.label}</a>
              </li>
            );
          })}
        </ul>
        {/* ----------------- for mobile-------------------- */}
        <div className="sm:hidden relative">
          <button
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            <TextAlignJustify />
          </button>
          <div
            className={` backdrop:blur-2xl  h-screen transition-transform duration-300 -right-4  w-screen absolute z-10 -top-4 ${
              isNavOpen ? "translate-x-0" : "translate-x-full"
            } flex justify-end`}
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            <ul className="text-center w-2/3 bg-[#E76195] text-white px-4 py-2">
              <button
                className="w-full flex justify-end mb-2 "
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                }}
              >
                <X className="size-8 hover:text-white/80 text-white " />
              </button>
              {navItems.map((e, i) => {
                return (
                  <li key={i} className="py-2 font-semibold text-xl capitalize">
                    <a href={e.href}>{e.label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
