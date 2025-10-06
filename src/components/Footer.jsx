import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import mainlogo from "../assets/mainlogo.png";
const Footer = () => {
    return (
        <footer className="container px-4 mt-5 mb-5 mx-auto">
            <div className="bg-[#629D23] text-white rounded-2xl">
                <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-10">
                    <div className="md:w-1/3">
                        <div className="flex items-center mb-4">
                            <img src={mainlogo} alt="Codeship-logo" className="object-contain w-[180px]" />
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Experience the perfect blend of functionality and design,
                            crafted for efficiency and elegance. Every detail ensures
                            simplicity, clarity, and ease, empowering you to achieve
                            more with confidence.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-between">
                        <div>
                            <h2 className="font-bold text-base mb-4">Quick Links</h2>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-bold text-base mb-4">Policy</h2>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Cancellation & Returns Policy</a></li>
                                <li><a href="#">Report Infringement</a></li>
                                <li><a href="#">Payments Policy</a></li>
                                <li><a href="#">Shipping Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <h2 className="font-bold text-base mb-4">Contact Info</h2>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center space-x-2">
                                <Phone size={16} /> <span>+91 93424 88917</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail size={16} /> <span>techsupport@codeship.in</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <MapPin size={18} />
                                <span>
                                    No 1, 1st Floor, Narasimhan St, West <br /> Mambalam, Chennai - 600033
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white mt-6">
                    <p className="text-center text-xs py-4">
                        © Copyright 2021 - 2025 Codeship pvt Ltd. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
