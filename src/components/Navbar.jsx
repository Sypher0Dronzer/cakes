import React from "react";

const Navbar = () => {
  const navItems = [
  { href: "/", label: "Home" },
  { href: "/#menu", label: "menu" },
  { href: "/#bestseller", label: "Best Seller" },
  { href: "/#contact", label: "contact Us" },

];
  return (
    <div className="absolute top-0 left-0 right-0 bg-linear-to-b from-[#FEE8F2] to-[#FCEBF3] py-4 px-auto ">
      <div className="2xl:max-w-[1280px] xl:max-w-[1200px] mx-auto xl:px-0 px-[3vw] sm:px-[5vw] flex justify-between">
        <div className="">LOGO</div>
        <ul className="flex justify-center gap-5 uppercase  font-semibold text-[#29100E] [&>*]:hover:text-[#EB6194]">
          {navItems.map((e,i)=>{
return(
  <li key={i}>
    <a href={e.href}>

    {e.label}
    </a>
    </li>
)
          })}
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
