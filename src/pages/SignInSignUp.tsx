import '../styles/SignInSignUp.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../assets/image/background-img.jpg'; // Import image

export function SignInSignUp() {
    const [isLogin, setIsLogin] = useState(true); // State to toggle forms
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard");
    };

    return (
        <div
            className="font-sans h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }} // Apply background image
        >
            <div
                className={`flex w-[65vw] h-[80vh] bg-gray-200 bg-opacity-85 rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out ${!isLogin ? "" : ""}`}
            >
                <div
                    id="welcome-section"
                    className={`grow-[3] flex flex-col items-center justify-center p-5 transition-all duration-500 ease-in-out ${!isLogin ? "transform translate-x-[65%]" : ""}`}
                    style={{
                        transition: "transform 0.3s ease-in-out",
                    }}
                >
                    <h1 className="font-timesNew text-black text-5xl mb-12">Welcome to Green Shadow!</h1>
                    <img src="src/assets/image/smart-farming.png" alt="Tractor and Field" id="main-image" className="w-full max-w-[600px] h-auto" />
                </div>

                <div
                    id="form-section"
                    className={`grow-[3] p-8 bg-gray-300 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${!isLogin ? "transform translate-x-[-160%]" : ""}`}
                    style={{
                        transition: "transform 0.3s ease-in-out",
                    }}
                >
                    {/* Login Form */}
                    <div
                        id="login-form"
                        className="form-container"
                        style={{ display: isLogin ? "block" : "none" }}
                    >
                        <h1 className="text-gray-800 mb-12 font-poppins text-[2em] font-bold text-center">Sign In</h1>
                        <div className="form w-full flex flex-col">
                            <label htmlFor="email" className="mb-2 text-base font-bold text-gray-800">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" className="p-2 mb-4 border border-gray-300 rounded-lg text-base text-gray-800" />

                            <label htmlFor="password" className="mb-2 text-base font-bold text-gray-800">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" className="p-2 mb-4 border border-gray-300 rounded-lg text-base text-gray-800" />

                            <a href="#" className="font-bold text-base mb-5">Forgot Password?</a>
                            <button type="submit" className="bg-black text-white py-3 px-5 rounded-full text-base font-bold cursor-pointer mb-5" onClick={handleLogin}>LOGIN ➔</button>
                            <p className="text-sm text-gray-600 font-bold">
                                Don't have an Account ?{" "}
                                <a
                                    href="#"
                                    className="text-blue-500 no-underline"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsLogin(false);
                                    }}
                                >
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Registration Form */}
                    <div
                        id="registration-form"
                        className="form-container"
                        style={{ display: isLogin ? "none" : "block" }}
                    >
                        <h1 className="text-gray-800 mb-12 font-poppins text-[2em] font-bold text-center">Create Account</h1>
                        <form className="form w-full flex flex-col">
                            <label htmlFor="email" className="mb-2 text-base font-bold text-gray-800">Email</label>
                            <input type="email" id="email-reg" placeholder="Enter your email" className="p-2 mb-4 border border-gray-300 rounded-lg text-base text-gray-800" />

                            <label htmlFor="password" className="mb-2 text-base font-bold text-gray-800">Password</label>
                            <input type="password" id="password-reg" placeholder="Enter your password" className="p-2 mb-4 border border-gray-300 rounded-lg text-base text-gray-800" />

                            <label htmlFor="confirm-password" className="mb-2 text-base font-bold text-gray-800">Confirm Password</label>
                            <input type="password" id="confirm-password" placeholder="Confirm your password" className="p-2 mb-4 border border-gray-300 rounded-lg text-base text-gray-800" />

                            <label htmlFor="role" className="mb-2 text-base font-bold text-gray-800">Select Your Role</label>
                            <select className="form-select p-2 mb-4 border border-gray-300 rounded-lg text-base text-gray-800" aria-label="Disabled select example">
                                <option>Select your Role</option>
                                <option value="ADMINISTRATIVE">ADMIN</option>
                                <option value="MANAGER">MANAGER</option>
                                <option value="SCIENTIST">SCIENTIST</option>
                                <option value="OTHER">OTHER</option>
                            </select>

                            <label className="mb-2 text-base font-bold text-gray-800">
                                <input
                                    type="checkbox"
                                    name="validate"
                                    id="validate-box"
                                    className="mr-2"
                                />
                                I agree to the terms and conditions
                            </label>

                            <button type="submit" className="bg-black text-white py-3 px-5 rounded-full text-base font-bold cursor-pointer mb-5">REGISTER ➔</button>
                            <p className="text-sm text-gray-600 font-bold">
                                Already have an account ?{" "}
                                <a
                                    href="#"
                                    className="text-blue-500 no-underline"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsLogin(true);
                                    }}
                                >
                                    Login
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
