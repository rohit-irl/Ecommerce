import React from 'react'
import Vegetable from './Vegetable'
const Hero = () => {
const PVeg = [{image:"/src/assets/veggies.png",title:"Organic Vegetable",subtitle:"299 ITEMS"},{image:"/src/assets/strawberry.png",title:"Organic Foods",subtitle:"299 ITEMS"},{image:"/src/assets/oil.png",title:"Premium Vegetable",subtitle:"299 ITEMS"},{image:"/src/assets/toast.png",title:"Organic Vegetable",subtitle:"299 ITEMS"},{image:"/src/assets/orange.png",title:"Organic Vegetable",subtitle:"299 ITEMS"},{image:"/src/assets/chicken.png",title:"Organic Vegetable",subtitle:"299 ITEMS"},{image:"/src/assets/masala.png",title:"Organic Vegetable",subtitle:"299 ITEMS"},{image:"/src/assets/drink.png",title:"Organic Vegetable",subtitle:"299 ITEMS"}]
  return (
    <div className="container mx-auto px-4 mt-5">
      <div className='bg-[#E7E7E7] h-[250px] rounded-xl '>
    </div>
    <div className='bg-[#629D23] mt-5 p-4 rounded-xl '>
        <h1 className='text-2xl font-bold text-white mb-4'>Featured Categories</h1>
        <Vegetable data={PVeg}/>
    </div>
    <div className="mt-5 flex gap-5 ">
      <div className='bg-[#E7E7E7] w-full lg:w-[100%]  rounded-sm py-5 px-8 space-y-5'>
        <div className="bg-[#629D23] text-white font-bold pl-4 pr-16 py-1 inline-block text-start" style={{clipPath: "polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%)",}}>Lorem ipsum</div>
        <h2 className='text-2xl text-[#2C3C28] font-bold'>Lorem ipsum <br /> dolor sit</h2>
        <p className='text-[#6E777D] font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
        <button className='bg-[#629D23] text-white rounded-sm text-center px-2 py-2'>Shop Now</button>
      </div>
      <div className='bg-[#E7E7E7] w-full lg:w-[100%] rounded-sm py-5 px-8 space-y-5'>
        <div className="bg-[#629D23] text-white font-bold pl-4 pr-16 py-1 inline-block text-start" style={{clipPath: "polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%)",}}>Lorem ipsum</div>
        <h2 className='text-2xl text-[#2C3C28] font-bold'>Lorem ipsum <br /> dolor sit</h2>
        <p className='text-[#6E777D] font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
        <button className='bg-[#629D23] text-white rounded-sm text-center px-2 py-2'>Shop Now</button>
      </div>
    </div>
    </div>
  )
}
export default Hero
