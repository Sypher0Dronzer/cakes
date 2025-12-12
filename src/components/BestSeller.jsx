import React from "react";

const BestSeller = () => {
  return (
    <div id='bestseller' className="py-8 bg-[#E76195]">
      <div className="2xl:max-w-4xl xl:max-w-[950px] mx-auto xl:px-0 px-[3vw] sm:px-[5vw]">
        <div className="sm:grid sm:grid-cols-2 flex flex-col-reverse">
          <div className="flex flex-col justify-center md:text-left text-center">
            <h1 className="text-white font-semibold md:text-5xl text-4xl">
              Our BestSeller
            </h1>
            <p className="text-[#29100E] font-semibold md:text-4xl text-3xl my-3">Black Forest Exclusive</p>
            <p className="text-white text-xl">Our Usual Price : <span>$49.99</span> </p>
            <p className="text-white text-xl">Price till 25th Dec : <span className="font-semibold italic text-[#29100E]"> $39.99</span>  </p>
            <div className="flex md:justify-start justify-center">

            <button className="bg-[#29100E] rounded-2xl px-3 py-1 text-white mt-2 w-[150px]">Try Now</button>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <img src="best.png" alt="No image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
