import { useNavigate, Link } from "react-router-dom";
import mainlogo2 from "../assets/mainlogo2.png";
import googlelogo from "../assets/googlelogo.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    mobile: z
        .string()
        .min(10, "Mobile number must be 10 digits")
        .max(10, "Mobile number must be 10 digits")
        .regex(/^[0-9]+$/, "Only digits allowed"),
    otp: z
        .string()
        .min(4, "OTP must be 4 digits")
        .max(4, "OTP must be 4 digits")
        .regex(/^[0-9]+$/, "Only digits allowed"),
    rememberMe: z.boolean().optional(),
});

export default function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });
    const googlealert = () => alert("Brooo... don't be Lazy 😁");
    const resendalert = () => alert("Not having enough technologia 😂");
    const emailalert = () => alert("Brooo...Just enter your number 😁");
    const onSubmit = (data) => {
        const savedMobile = localStorage.getItem("mobile");
        const savedOtp = localStorage.getItem("otp");

        if (data.mobile === savedMobile && data.otp === savedOtp) {
            if (data.rememberMe) {
                localStorage.setItem("role", "user");
            } else {
                sessionStorage.setItem("role", "user");
            }
            navigate("/home");
        } else {
            setError("⚠️ Invalid mobile number or OTP.");
        }
    };

    return (
        <>
            <div className="container mx-auto mt-5 px-4">
                <div className="flex flex-col items-center gap-4 text-center">
                    <img src={mainlogo2} alt="Codeship-logo" className="w-40 sm:w-48 md:w-56 lg:w-auto" />
                    <p className="text-[#333333] text-2xl sm:text-3xl md:text-4xl font-semibold">
                        Hi, Welcome to Codeship!
                    </p>
                    <p className="text-[#333333] text-lg sm:text-xl font-semibold">
                        Login to your account
                    </p>
                    <button className="border border-[#282828] rounded-md w-full max-w-md mb-2 py-4 flex justify-center gap-3 items-center cursor-pointer" onClick={googlealert}>
                        <img className="w-6 h-6" src={googlelogo} alt="G-logo" />
                        <span className="text-[#282828] font-medium text-base sm:text-lg">
                            Sign in with Google
                        </span>
                    </button>
                    <div className="flex items-center w-full max-w-md my-2">
                        <hr className="flex-grow border border-[#282828]" />
                        <span className="mx-2 text-gray-500 text-sm cursor-pointer" onClick={emailalert}>
                            or Sign in with Email
                        </span>
                        <hr className="flex-grow border border-[#282828]" />
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-5 flex flex-col items-center">
                    <div className="w-full max-w-md flex flex-col text-left">
                        <p className="text-[#333333]">Mobile number</p>
                        <input className="border border-[#EAEAEA] rounded-md w-full mb-1 py-3 px-3 placeholder:text-[#333333]" type="tel" placeholder="Send OTP" {...register("mobile")} maxLength={10} />
                        {errors.mobile && (
                            <p className="text-red-500 text-sm mb-2">
                                {errors.mobile.message}
                            </p>
                        )}
                        <p className="text-[#333333]">OTP</p>
                        <input className="border border-[#EAEAEA] rounded-md w-full mb-1 py-3 px-3 placeholder:text-[#333333]" type="tel" placeholder="Verify OTP" {...register("otp")} maxLength={4} />
                        {errors.otp && (
                            <p className="text-red-500 text-sm mb-2">{errors.otp.message}</p>
                        )}
                    </div>
                    <div className="w-full max-w-md flex justify-end mt-1">
                        <p className="text-sm cursor-pointer" onClick={resendalert}>
                            Resend OTP
                        </p>
                    </div>
                    <div className="w-full max-w-md flex gap-2 mt-4">
                        <input type="checkbox" className="accent-[#629D23]" {...register("rememberMe")} />
                        <span>Remember me</span>
                    </div>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    <button type="submit" className="bg-[#629D23] text-white rounded-md w-full max-w-sm py-3 mt-4">
                        Log In
                    </button>
                    <p className="w-full max-w-md text-left text-sm mt-2">
                        Not registered yet?{" "}
                        <Link to="/signup" className="text-[#333333] underline font-medium">
                            Create an Account
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
}
