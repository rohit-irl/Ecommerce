import React from 'react'
import { Facebook, Instagram, Twitter,UtilityPole} from "lucide-react";
import contactbottom from "../assets/contactbottom.png";

const Contact = () => {
    return (
        <div className="container mx-auto px-4 mt-5">
            <div className='bg-[#E7E7E7] h-[250px] rounded-xl'></div>
            <div className='flex mt-5'>
            <div className='w-[50vw]'>
                <p className='text-2xl font-normal'>Get Started</p>
                <p className='text-5xl font-bold pr-7'>Get in touch with us. We're here to assist you.</p>
                <div>
                    <div className='flex gap-5 mt-5'>
                         <a className='border border-[#B7B7B7] rounded-full h-[70px] w-[70px] flex justify-center items-center' href="https://facebook.com"><Facebook size={24}/></a>
                         <a className='border border-[#B7B7B7] rounded-full h-[70px] w-[70px] flex justify-center items-center' href="https://instagram.com"><Instagram size={24}/></a>
                         <a className='border border-[#B7B7B7] rounded-full h-[70px] w-[70px] flex justify-center items-center' href="https://twitter.com"><Twitter size={24}/></a>
                    </div>
                </div>
            </div>
            <div className='border border-[#EAEAEA] w-[50vw] p-5 mt-5 rounded-xl'>
                <p className="text-[#4B4B4B]">Your Name</p>
                <input className="border border-[#DDDDDD] rounded-md w-full mt-2 mb-2 py-5 px-3" type="text" />
                <p className="text-[#4B4B4B]">Email Address</p>
                <input className="border border-[#DDDDDD] rounded-md w-full mt-2 mb-2 py-5 px-3" type="text" />
                <p className="text-[#4B4B4B]">Phone Number</p>
                <input className="border border-[#DDDDDD] rounded-md w-full mt-2 mb-2 py-5 px-3" type="text" />
                <p className="text-[#4B4B4B]">Message</p>
                <input className="border border-[#DDDDDD] rounded-md w-full mt-2 mb-2 py-10 px-3" type="text" />
                <button className='bg-[#629D23] flex text-white text-sm mt-2 px-10 py-4 rounded-xl gap-2' ><UtilityPole size={20}/> Send Message</button>
            </div>
            </div>
            <div className='mt-5'>
                <img src={contactbottom} alt="Cbottom" />
            </div>
        </div>
        
    )
}

export default Contact