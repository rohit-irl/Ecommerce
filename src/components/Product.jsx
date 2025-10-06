import React from "react";
import cable from "../assets/cable.png";
import iron from "../assets/iron.png";
import goggle from "../assets/goggle.png";
import block from "../assets/block.png";
import bag from "../assets/bag.png";
import ptoy from "../assets/ptoy.png";
import speaker from "../assets/speaker.png";
import extension from "../assets/extension.png";
import craft from "../assets/craft.png";
import kappliance from "../assets/kappliance.png";
import unocard from "../assets/unocard.png";
import earbuds from "../assets/earbuds.png";
import massager from "../assets/massager.png";

const Product = () => {
  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="bg-[#F2FFEF] flex flex-col lg:flex-row p-6 rounded-md gap-6">
        <div className="flex flex-col justify-center items-start text-left rounded-md p-6 w-full lg:w-2/5">
          <span
            className="bg-[#1D686A] text-white font-bold pl-4 pr-16 py-1 inline-block whitespace-nowrap"
            style={{ clipPath: "polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%)", }}>
            Lorem ipsum
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D686A] mt-4 leading-snug">
            Lorem ipsum <br /> dolor sit amet <br /> consectetur.
          </h2>
          <button className="bg-[#1D686A] text-white px-5 py-2 mt-6 rounded-md font-medium shadow hover:bg-[#145253] transition">
            Shop Now
          </button>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full lg:w-3/5">
          {[cable, iron, goggle, block, bag, ptoy, speaker, extension, craft, kappliance, unocard, earbuds, massager].map(
            (img, idx) => (
              <img key={idx} src={img} alt={`product-${idx}`} className="max-h-[120px] sm:max-h-[150px] object-contain flex-1" />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
