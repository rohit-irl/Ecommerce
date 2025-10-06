import React from "react";
const Vegetable = (data) => {
  return (
    <div className="flex gap-6 py-4 justify-around flex-wrap">
     {data.data.map((item,index)=>
      <div className="bg-white rounded-xl shadow-md p-4" key={index}>
      <img className="object-contain mx-auto w-18 h-15 rounded-lg" src={item.image} alt={item.title}/>
      <h2 className="text-sm text-center mt-2 text-nowrap">{item.title}</h2>
      <p className="text-sm text-center text-green-500">{item.subtitle}</p>
    </div>)}
    </div>
  );
};
export default Vegetable;
