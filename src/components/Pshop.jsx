import React, { useRef, useState, useEffect } from "react";
import danonki from "../assets/danonki.png";

import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const grocerys = [
  { image: danonki, text: "Details business makes your profit", subtext: "500g Pack", price: "$90.00", mrp: "$36.00" },
  { image: danonki, text: "Details business makes your profit", subtext: "500g Pack", price: "$90.00", mrp: "$36.00" },
  { image: danonki, text: "Details business makes your profit", subtext: "500g Pack", price: "$90.00", mrp: "$36.00" },
  { image: danonki, text: "Details business makes your profit", subtext: "500g Pack", price: "$90.00", mrp: "$36.00" },
  { image: danonki, text: "Details business makes your profit", subtext: "500g Pack", price: "$90.00", mrp: "$36.00" },
  { image: danonki, text: "Details business makes your profit", subtext: "500g Pack", price: "$90.00", mrp: "$36.00" },
];

const Pshop = () => {
  const sliderRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScroll();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScroll);
      return () => slider.removeEventListener("scroll", checkScroll);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="bg-[#f5ecff] p-6 rounded-md">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="bg-[#8A2BE2]/20 flex flex-col justify-center items-start text-left rounded-md p-6 w-full lg:w-1/3">
            <span className="bg-[#6D1D9C] text-white font-bold pl-4 pr-16 py-1 inline-block text-start" style={{clipPath: "polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%)",}}>Lorem ipsum</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#6D1D9C] mt-4 leading-snug">
              Lorem ipsum <br /> dolor sit amet <br /> consectetur.
            </h2>
            <button className="bg-[#6D1D9C] text-white px-5 py-2 mt-6 rounded-md font-medium shadow">
              Shop Now
            </button>
          </div>
          <div className="relative flex-1 w-full rounded-md p-4 overflow-hidden">
            {showLeft && (
              <button onClick={slideLeft} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#629D23] text-white p-2 rounded-full shadow">
                <ChevronLeft size={20} />
              </button>
            )}
            {showRight && (
              <button onClick={slideRight} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#629D23] text-white p-2 rounded-full shadow">
                <ChevronRight size={20} />
              </button>
            )}
            <div ref={sliderRef} className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar">
              {grocerys.map((val, index) => (
                <div key={index} className="min-w-[200px] p-3 flex flex-col bg-[#F5F6F7] rounded-md shadow-sm">
                  <div className="flex justify-center items-center h-[120px]  rounded-md">
                    <img src={val.image} alt="product" className="h-35 py-2 object-contain"/>
                  </div>
                  <div className="mt-2 text-sm font-bold text-[#2C3C28]">
                    {val.text}
                  </div>
                  <div className="text-[#6E777D] text-xs">{val.subtext}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[#DC2626] text-lg font-bold">
                      {val.price}
                    </span>
                    <span className="text-[#6E777D] line-through text-sm">
                      {val.mrp}
                    </span>
                  </div>
                  <div className="mt-auto flex justify-between items-center">
                    <select className="border text-sm rounded-sm px-1 py-0.5">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <button className="flex items-center border-1 border-[#629D23] gap-1 bg-transparent text-[#629D23] px-2 py-1 text-md font-semibold rounded-sm">
                      Add <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pshop;
