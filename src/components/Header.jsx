import React from "react";
const Header = () => {
  return (
    <div className="bg-[#FCEBF3] sm:h-screen pb-8 pt-[56px] text-[#29100E]">
      <div className="2xl:max-w-[1280px] xl:max-w-[1200px] mx-auto xl:px-0 px-[3vw] sm:px-[5vw] h-full">
        <div className="sm:grid sm:grid-cols-2 flex flex-col-reverse sm:h-full gap-4">
          <div className="flex flex-col justify-center ">

            <h1 className="md:text-5xl text-4xl text-center sm:text-left font-semibold md:leading-14">
              This <span className="text-[#E76195]">Christmas</span>
            </h1>
            <h1 className="md:text-5xl text-4xl text-center sm:text-left font-semibold md:leading-14">Get you Favourite Cakes  at Best Prices

                </h1>
                <h1 className="md:text-5xl text-4xl text-center sm:text-left font-semibold md:leading-14">
               
                </h1>
            <p className="my-4 sm:text-left text-center ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              velit debitis sed? Porro accusantium soluta dolorem similique
              exercitationem quod eveniet sequi expedita eum.
            </p>
            <div className="flex gap-4 sm:justify-start justify-center">
              <button className="px-4 py-2 w-[170px] block bg-[#E76195] rounded-lg text-white font-semibold">
                Our Location
              </button>
              <button className="px-4 py-2 w-[170px] block text-white rounded-lg bg-[#29100E] font-semibold">
                Menu
              </button>
            </div>
          </div>
          <div className=" flex justify-center items-center ">
            <img src="headcake.png" className="w-[70%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
