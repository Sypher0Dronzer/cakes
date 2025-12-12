import { Facebook, Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
    <div id="contact" className="py-12 bg-[#29100E] text-white">
      <div className="2xl:max-w-4xl xl:max-w-[950px] mx-auto xl:px-0 px-[3vw] sm:px-[5vw]">
        <div className="grid grid-cols-2">
          {/* <div className="flex flex-col items-center">
            <div className="">
              <img src="logo.png" className="size-24" />
            </div>
            <p>Brand Name</p>
            
          </div> */}

          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-lg">Contact Info</h1>
            <ul>
                <li>Phone: +123456789</li>
                <li>Email: xyz@gmail.com</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-lg">Address</h1>
            <ul className="text-center">
                <li>ABC Street</li>
                <li>Road - 123</li>
                <li>New York</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    <div className="text-center py-2 text-white italic bg-[#EB6194]">Merry Christmas</div>
    </>
  );
};

export default Footer;
