import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import thouse from "../assets/thouse.png";
import chocolate from "../assets/chocolate.png";
import crisps from "../assets/crisps.png";
import danonki from "../assets/danonki.png";
import pasta from "../assets/pasta.png";
import gchicken from "../assets/gchicken.png";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const baths = [
  { image: thouse, text: "Details Profitable business makes your profit", subtext: "500g Pack", price: "$29.00", mrp: "$36.00" },
  { image: chocolate, text: "Firebase business makes your profit", subtext: "500g Pack", price: "$50.00", mrp: "$36.00" },
  { image: crisps, text: "Netlify business makes your profit", subtext: "500g Pack", price: "$19.00", mrp: "$36.00" },
  { image: danonki, text: "Details business makes your profit", subtext: "500g Pack", price: "$90.00", mrp: "$36.00" },
  { image: pasta, text: "Profitable business makes your profit", subtext: "500g Pack", price: "$30.00", mrp: "$36.00" },
  { image: gchicken, text: "Valuable business makes your profit", subtext: "500g Pack", price: "$16.00", mrp: "$36.00" },
];

const Bath = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="bg-white p-5 rounded-md shadow-sm border border-[#E2E2E2]">
        <div className="flex justify-between items-center mb-6 border-b-2 border-[#E2E2E2] pb-5">
          <h2 className="text-2xl font-bold text-[#2C3C28]">
            Bath Essentials
          </h2>
          <div className="flex gap-2">
            <button ref={prevRef} className="w-8 h-8 rounded-md border flex items-center justify-center text-white bg-[#629D23]">
              <ChevronLeft size={20}/>
            </button>
            <button ref={nextRef} className="w-8 h-8 rounded-md border flex items-center justify-center text-white bg-[#629D23]">
              <ChevronRight size={20}/>
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}>
          {baths.map((val, index) => (
            <SwiperSlide key={index}>
              <div className="p-3 flex flex-col bg-[#F5F6F7] h-full rounded-md">
                <div className="flex justify-center items-center h-[120px] bg-[#F5F6F7] rounded-md">
                  <img src={val.image} alt="product" className="h-35 py-1 object-contain" />
                </div>
                <div className="mt-2 text-xl font-semibold text-[#2C3C28]">{val.text}</div>
                <div className="text-[#6E777D] text-xs">{val.subtext}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[#DC2626] text-lg font-bold">{val.price}</span>
                  <span className="text-[#6E777D] line-through text-sm">{val.mrp}</span>
                </div>
                <div className="mt-auto flex justify-between items-center">
                  <select className="border text-sm rounded-sm px-1 py-0.5">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <button className="flex items-center border-1 border-[#629D23] gap-1 bg-transparent text-[#629D23] px-2 py-1 text-md font-semibold rounded-sm">
                    Add &nbsp;<ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Bath;
