import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password");
      return;
    }

    setError("");
    alert("Login Successful!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto space-y-5"
    >
      {/* Email */}
      <div>
        <label className="block mb-2 text-sm font-semibold text-[#2C3E50]">
          Email
        </label>

        <div className="relative">
          <Mail
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-[#C9A84C]"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block mb-2 text-sm font-semibold text-[#2C3E50]">
          Password
        </label>

        <div className="relative">
          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

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

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex justify-between items-center text-sm">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="accent-[#C9A84C]"
          />
          Remember me
        </label>

        <Link
          to="/forgot-password"
          className="text-[#B8860B] hover:underline"
        >
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

      {/* Google Button */}
      <button
        type="button"
        onClick={() =>alert("Google Login Coming Soon")}
        className="w-full border border-gray-300 rounded-xl py-4 flex items-center justify-center gap-3 bg-white hover:bg-gray-50 transition"
      >
        
        <span className="font-medium text-gray-700">
          Login with Google
        </span>
      </button>

      {/* Register */}
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
  );
}