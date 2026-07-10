import { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";


// Forgot Password component
// onBack = Login page par wapas jane ke liye
// onNext = next step par jane ke liye
export default function ForgetPassword({ onBack, onNext }) {


  // Email input ki value store karne ke liye
  const [email, setEmail] = useState("");

  // Success message show karne ke liye
  const [message, setMessage] = useState("");

  // Error message show karne ke liye
  const [error, setError] = useState("");


  // Form submit handle karne ka function
  const handleSubmit = (e) => {
    e.preventDefault();


    // Check karta hai email empty hai ya nahi
    if (!email) {
      setError("Please enter your email");
      setMessage("");
      return;
    }


    // Email submit hone ke baad success message
    setError("");
    setMessage("Password reset link has been sent to your email.");

    // Next step par move karne ke liye
    onNext && onNext();
  };


  return (

    // Main container
    <div className="w-full max-w-md mx-auto">


      {/* Forgot Password Heading */}
      <h2 className="text-4xl font-bold text-[#2C3E50] mb-2">
        Forgot Password
      </h2>


      {/* User instruction text */}
      <p className="text-gray-500 mb-8">
        Enter your email to receive a password reset link.
      </p>


      {/* Error message */}
      {error && (
        <p className="text-red-500 text-sm mb-4">
          {error}
        </p>
      )}


      {/* Success message */}
      {message && (
        <p className="text-green-600 text-sm mb-4">
          {message}
        </p>
      )}



      {/* Forgot Password Form */}
      <form onSubmit={handleSubmit} className="space-y-5">


        {/* Email Input Field */}
        <div>


          {/* Email Label */}
          <label className="block mb-2 text-sm font-semibold text-[#2C3E50]">
            Email
          </label>


          {/* Email input with icon */}
          <div className="relative">


            {/* Mail Icon */}
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />


            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-[#C9A84C]"
            />


          </div>
        </div>



        {/* Send Reset Link Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#C9A84C] to-[#B8860B] text-white py-4 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Send Reset Link
        </button>




        {/* OR Divider */}
        <div className="flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>


          {/* OR Text */}
          <span className="px-3 text-gray-500 text-sm">
            OR
          </span>


          <div className="flex-1 border-t border-gray-300"></div>
        </div>




        {/* Google Reset Link Button */}
        <button
          type="button"
          onClick={() => alert("Google Reset Link Coming Soon")}
          className="w-full border border-gray-300 rounded-xl py-4 flex items-center justify-center gap-3 bg-white hover:bg-gray-50 transition"
        >


          {/* Google Icon */}
          <svg className="w-5 h-5" viewBox="0 0 48 48">


            {/* Google Icon Yellow Part */}
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>


            {/* Google Icon Red Part */}
            <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>


            {/* Google Icon Green Part */}
            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 35 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>


            {/* Google Icon Blue Part */}
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>


          </svg>


          {/* Google Button Text */}
          <span className="font-medium text-gray-700">
            Send Link with Google
          </span>


        </button>




        {/* Back to Login Link */}
        <p className="text-center text-gray-600">
          Remember your password?{" "}


          <button
            type="button"
            onClick={onBack}
            className="text-[#B8860B] font-semibold hover:underline"
          >
            Back to Login
          </button>


        </p>


      </form>


    </div>
  );
}