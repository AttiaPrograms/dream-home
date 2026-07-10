// Import React hooks and required libraries
import { useState } from "react";
import { Link } from "react-router-dom";

// Import Icons
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

// Import Authentication Components
import ForgotPassword from "./ForgetPassword";
import ResetPassword from "./ResetPassword";


export default function Login() {

  // Store email input value
  const [email, setEmail] = useState("");

  // Store password input value
  const [password, setPassword] = useState("");

  // Control password show/hide state
  const [showPassword, setShowPassword] = useState(false);

  // Store login error message
  const [error, setError] = useState("");

  // Control Forgot Password component visibility
  const [showForgot, setShowForgot] = useState(false);

  // Control Reset Password component visibility
  const [showReset, setShowReset] = useState(false);


  // Handle Login Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email or password fields are empty
    if (!email || !password) {
      setError("Please enter your email and password");
      return;
    }

    // Login success message
    setError("");
    alert("Login Successful!");
  };


  // Display Reset Password Component
  if (showReset) {
    return (
      <ResetPassword
        onBack={() => setShowReset(false)}
      />
    );
  }


  // Display Forgot Password Component
  if (showForgot) {
    return (
      <ForgotPassword
        onBack={() => setShowForgot(false)}

        // Move from Forgot Password to Reset Password
        onNext={() => {
          setShowForgot(false);
          setShowReset(true);
        }}
      />
    );
  }


  return (
    <>

      {/* Login Page Heading */}
      <h2 className="text-3xl font-bold text-[#1A2A3A] mb-2 text-center">
        Login
      </h2>


      {/* Login Page Subtitle */}
      <p className="text-[#7F8C8D] text-base mb-6 text-center">
        Sign in to continue
      </p>


      {/* Login Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-5">


        {/* Email Input Section */}
        <div>

          {/* Email Label */}
          <label className="block mb-2 text-sm font-semibold text-[#2C3E50]">
            Email
          </label>


          {/* Email Input Container */}
          <div className="relative">

            {/* Email Icon */}
            <Mail 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />


            {/* Email Input Field */}
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-[#C9A84C]"
            />

          </div>

        </div>



        {/* Password Input Section */}
        <div>


          {/* Password Label */}
          <label className="block mb-2 text-sm font-semibold text-[#2C3E50]">
            Password
          </label>


          {/* Password Input Container */}
          <div className="relative">


            {/* Password Icon */}
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />


            {/* Password Input Field */}
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border rounded-xl py-4 pl-12 pr-12 bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none ${
                error
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-[#C9A84C] focus:border-[#C9A84C]"
              }`}
            />


            {/* Show / Hide Password Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <EyeOff size={20}/>
              ) : (
                <Eye size={20}/>
              )}
            </button>


          </div>



          {/* Login Error Message */}
          {error && (
            <p className="text-red-500 text-sm mt-2">
              {error}
            </p>
          )}

        </div>



        {/* Remember Me & Forgot Password Section */}
        <div className="flex justify-between items-center text-sm">


          {/* Remember Me Checkbox */}
          <label className="flex items-center gap-2">
            <input 
              type="checkbox"
              className="accent-[#C9A84C]"
            />
            Remember me
          </label>


          {/* Forgot Password Button */}
          <button
            type="button"
            onClick={() => setShowForgot(true)}
            className="text-[#B8860B] hover:underline"
          >
            Forgot Password?
          </button>


        </div>



        {/* Login Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#C9A84C] to-[#B8860B] text-white py-4 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Login
        </button>



        {/* OR Divider */}
        <div className="flex items-center">

          <div className="flex-1 border-t border-gray-300"></div>

          <span className="px-3 text-gray-500 text-sm">
            OR
          </span>

          <div className="flex-1 border-t border-gray-300"></div>

        </div>



        {/* Google Login Button */}
        <button
          type="button"
          onClick={() => alert("Google Login Coming Soon")}
          className="w-full border border-gray-300 rounded-xl py-4 flex items-center justify-center gap-3 bg-white transition"
        >

          {/* Google Icon */}
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            {/* Google SVG Paths */}
          </svg>


          {/* Google Login Text */}
          <span className="font-medium text-gray-700">
            Login with Google
          </span>

        </button>



        {/* Register Redirect Link */}
        <p className="text-center text-gray-600">
          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-[#B8860B] font-semibold hover:underline"
          >
            Sign Up
          </Link>

        </p>


      </form>

    </>
  );
}