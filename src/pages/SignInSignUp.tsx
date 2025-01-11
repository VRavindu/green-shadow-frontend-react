import '../styles/SignInSignUp.css'
import {useState} from "react";

export function SignInSignUp() {
    const [isLogin, setIsLogin] = useState(true); // State to toggle forms

    return (
        <>
            <div className={`container ${!isLogin ? "container-signup" : ""}`}>
                <div id="welcome-section" className={`welcome-section ${!isLogin ? "welcome-section-signup" : ""}`}>
                    <h1>Welcome to Green Shadow!</h1>
                    <img src="src/assets/image/smart-farming.png" alt="Tractor and Field" id="main-image"/>
                </div>

                <div id="form-section" className={`form-section ${!isLogin ? "form-section-signup" : ""}`}>
                    {/* Login Form */}
                    <div
                        id="login-form"
                        className="form-container"
                        style={{display: isLogin ? "block" : "none"}}
                    >
                        <h1>Sign In</h1>
                        <div className="form">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email"/>

                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password"/>

                            <a href="#" className="forgot-password">Forgot Password?</a>
                            <button type="submit" id="login-btn">LOGIN ➔</button>
                            <p>
                                Don't have an Account ?{" "}
                                <a
                                    href="#"
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

                    <div
                        id="registration-form"
                        className="form-container"
                        style={{display: isLogin ? "none" : "block"}}
                    >
                        <h1>Create Account</h1>
                        <form className="form">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email-reg" placeholder="Enter your email"/>

                            <label htmlFor="password">Password</label>
                            <input type="password" id="password-reg" placeholder="Enter your password"/>

                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" id="confirm-password" placeholder="Confirm your password"/>

                            <label htmlFor="role">Select Your Role</label>
                            <select className="form-select" aria-label="Disabled select example">
                                <option>Select your Role</option>
                                <option value="ADMINISTRATIVE">ADMIN</option>
                                <option value="MANAGER">MANAGER</option>
                                <option value="SCIENTIST">SCIENTIST</option>
                                <option value="OTHER">OTHER</option>
                            </select>

                            <label>
                                <input
                                    type="checkbox"
                                    name="validate"
                                    id="validate-box"
                                    placeholder="Accept"
                                />
                                I agree to the terms and conditions
                            </label>
                            <button type="submit" id="register-btn">REGISTER ➔</button>
                            <p>
                                Already have an account ? {" "}
                                <a
                                    href="#"
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
        </>
    );
}