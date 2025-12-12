import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const bestCakes = [
  {
    name: "Chocolate Fudge Cake",
    price: "$25.99",
    discounted: "$19.99",
    type: "egg",
  },
  {
    name: "Vanilla Bean Dream",
    price: "$22.50",
    discounted: "$18.00",
    type: "egg",
  },
  {
    name: "Vegan Lemon Zest Cake",
    price: "$28.00",
    discounted: "$24.00",
    type: "vegan",
  },
  {
    name: "Red Velvet Classic",
    price: "$30.00",
    discounted: "$26.00",
    type: "egg",
  },
  {
    name: "Vegan Chocolate Almond Cake",
    price: "$32.00",
    discounted: "$27.50",
    type: "vegan",
  },
  {
    name: "Carrot Walnut Cake",
    price: "$26.50",
    discounted: "$21.00",
    type: "egg",
  },
  {
    name: "Vegan Blueberry Crumble Cake",
    price: "$29.99",
    discounted: "$25.99",
    type: "vegan",
  },
  {
    name: "Mocha Espresso Cake",
    price: "$31.00",
    discounted: "$28.00",
    type: "egg",
  },
  {
    name: "Vegan Coconut Pineapple Cake",
    price: "$27.00",
    discounted: "$23.00",
    type: "vegan",
  },
  {
    name: "Strawberry Shortcake",
    price: "$24.00",
    discounted: "$20.00",
    type: "egg",
  },
];


export default function MenuSlider() {
  return (
    <div id="menu" className="py-12">
      <div className="2xl:max-w-7xl xl:max-w-[1200px] mx-auto xl:px-0 px-[3vw] sm:px-[5vw] ">
        <h2 className="mb-8 text-4xl text-center font-semibold">Our Menu</h2>
        <Swiper className="w-full h-full"
          slidesPerView={2}
          spaceBetween={5}
          loop={true}
       
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Autoplay]}
        //   className="mySwiper"
        >
          {bestCakes.map((e, index) => {
            return (
              <SwiperSlide key={index} className="p-2 min-h-[50px]">
                <div className=" shadow-[#E76195]/50 shadow-sm bg-[#FCEBF3] rounded-lg overflow-hidden  ">
                  <div className="overflow-hidden aspect-square">
                    <img
                      src={`/bestSeller/` + "cake1.jpg"}
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4 flex flex-col items-center">

                  <h1 className="font-semibold text-center line-clamp-1">{e.name}</h1>
                  <p>Price : 
                    <span className="text-red-900 line-through"> {e.price} </span>
                    {'  '} <span> {e.discounted} </span></p>
                    <div className="px-2 py-0.5 bg-[#E76195] text-white rounded-2xl text-sm mt-1">{e.type}</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
