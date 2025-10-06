import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import mainlogo2 from "../assets/mainlogo2.png";
import googlelogo from "../assets/googlelogo.png";

export default function Signup() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const googlealert = () => {
        alert("Brooo... don't be Lazy \u{1F600}");
    }
    const resendalert = () => {
        alert("Not having enough technologia \u{1F602}");
    }
    const handleSignup = () => {
        if (!fullName || !mobile || !otp) {
            alert("Please fill all fields!");
            return;
        }
        if (!acceptedTerms) {
            alert("You must agree to Terms & Conditions before signing up!");
            return;
        }
        localStorage.setItem("fullName", fullName);
        localStorage.setItem("mobile", mobile);
        localStorage.setItem("otp", otp);
        alert("Signup successful! You can now log in.");
        navigate("/login");
    };
    return (
        <>
            <div className="container mx-auto mt-5 px-4">
                <div className="flex flex-col items-center gap-4 text-center">
                    <img src={mainlogo2} alt="Codeship-logo" className="w-48 sm:w-56 md:w-64 lg:w-auto" />
                    <p className="text-[#333333] text-2xl sm:text-3xl md:text-4xl font-semibold">
                        Hi, Welcome to Codeship!
                    </p>
                    <p className="text-[#333333] text-lg sm:text-xl font-semibold">
                        Create an account with us
                    </p>
                    <button className="border border-[#282828] rounded-md w-full max-w-md mb-2 py-4 flex justify-center gap-3 items-center" onClick={googlealert}>
                        <img className="w-6 h-6" src={googlelogo} alt="G-logo" />
                        <span className="text-[#282828] font-medium text-base sm:text-lg">
                            Sign in with Google
                        </span>
                    </button>
                    <div className="flex items-center w-full max-w-md my-2">
                        <hr className="flex-grow border border-[#282828]" />
                        <span className="mx-2 text-gray-500 text-sm">or Sign in with Email</span>
                        <hr className="flex-grow border border-[#282828]" />
                    </div>
                </div>
                <div className="mt-5 flex flex-col items-center">
                    <div className="w-full max-w-md flex flex-col text-left">
                        <p className="text-[#333333]">Full name</p>
                        <input className="border border-[#EAEAEA] rounded-md w-full mb-2 py-3 px-3" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        <p className="text-[#333333]">Mobile number</p>
                        <input className="border border-[#EAEAEA] rounded-md w-full mb-2 py-3 px-3 placeholder:text-[#333333]" type="number" placeholder="Enter your number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        <p className="text-[#333333]">OTP</p>
                        <input className="border border-[#EAEAEA] rounded-md w-full mb-2 py-3 px-3 placeholder:text-[#333333]" type="number" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                    </div>
                    <div className="w-full max-w-md flex justify-end mt-1">
                        <p className="text-sm cursor-pointer" onClick={resendalert}>Resend OTP</p>
                    </div>
                    <div className="flex text-left w-full max-w-md gap-2 mt-4">
                        <input type="checkbox" className="accent-[#629D23]" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />
                        <span>
                            I agree to the{" "}
                            <a href="#" className="text-[#333333] font-semibold underline">
                                Terms & Conditions
                            </a>
                        </span>
                    </div>
                    <button onClick={handleSignup} className="bg-[#629D23] text-white rounded-md w-full max-w-sm py-3 mt-4">
                        Sign Up
                    </button>
                    <p className="w-full max-w-md text-sm text-left mt-2">
                        Already have an Account?{" "}
                        <Link to="/login" className="text-[#333333] underline font-medium">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
