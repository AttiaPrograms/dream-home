import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {

  // State for form inputs and password visibility
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");


  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check empty fields
    if (!email || !password) {
      setError("Please enter your email and password");
      return;
    }

    // Login success
    setError("");
    alert("Login Successful!");
  };


  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-5">

      {/* Email Input */}
      <div>
        <label className="block mb-2 text-sm font-semibold text-[#2C3E50]">
          Email
        </label>

        <div className="relative">

          {/* Email Icon */}
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

          {/* Email Field */}
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-[#C9A84C]"
          />

        </div>
      </div>


      {/* Password Input */}
      <div>

        <label className="block mb-2 text-sm font-semibold text-[#2C3E50]">
          Password
        </label>

        <div className="relative">

          {/* Password Icon */}
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

          {/* Password Field */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full border rounded-xl py-4 pl-12 pr-12 bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none ${error ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-[#C9A84C] focus:border-[#C9A84C]"}`}
          />


          {/* Show Hide Password Button */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

        </div>


        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mt-2">
            {error}
          </p>
        )}

      </div>


      {/* Remember Me & Forgot Password */}
      <div className="flex justify-between items-center text-sm">

        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-[#C9A84C]" />
          Remember me
        </label>

        <Link to="/forgot-password" className="text-[#B8860B] hover:underline">
          Forgot Password?
        </Link>

      </div>


      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#C9A84C] to-[#B8860B] text-white py-4 rounded-xl font-semibold hover:opacity-90 transition"
      >
        Login
      </button>


      {/* Divider */}
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

          <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>

          <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>

          <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 35 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>

          <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>

        </svg>


        <span className="font-medium text-gray-700">
          Login with Google
        </span>

      </button>


      {/* Register Link */}
      <p className="text-center text-gray-600">
        Don't have an account?{" "}
        <Link to="/register" className="text-[#B8860B] font-semibold hover:underline">
          Sign Up
        </Link>
      </p>


    </form>
  );
}