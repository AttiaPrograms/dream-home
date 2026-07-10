import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";


// Reset Password component
// onBack = Login page par wapas jane ke liye
const ResetPassword = ({onBack}) => {


  // New password aur confirm password show/hide karne ke liye states
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  // Password fields ka data store karne ke liye state
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });


  // Error aur success messages ke liye states
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  // Input fields ki value update karne ka function
  // Error aur success message clear karta hai
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };


  // Form submit hone par validation check karta hai
  const handleSubmit = (e) => {
    e.preventDefault();


    // Check karta hai ke dono fields filled hain ya nahi
    if (
      !formData.newPassword.trim() ||
      !formData.confirmPassword.trim()
    ) {
      setError("Please fill all fields.");
      return;
    }


    // Password length check
    if (formData.newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }


    // Dono passwords match check
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }


    // Successful password reset message
    setError("");
    setSuccess("Password reset successfully!");

    alert("Password Reset Successful!");
  };
  

  return (

  // Main Reset Password container
  <div className="w-full">


    {/* Page Heading */}
    <h2 className="text-4xl font-bold text-[#2C3E50] mb-2 text-center">
      Reset Password
    </h2>


    {/* Page Description */}
    <p className="text-gray-500 mb-8 text-center">
      Create a new password for your account
    </p>


    {/* Reset Password Form */}
    <form onSubmit={handleSubmit} className="space-y-5 w-full">


      {/* New Password Input */}
      <div>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          New Password
        </label>


        {/* Password field with lock icon */}
        <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#C9A84C]">
          
          <Lock className="w-5 h-5 text-gray-400 mr-2" />


          {/* New password input */}
          <input
            type={showNewPassword ? "text" : "password"}
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="Enter New Password"
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />


          {/* Show/Hide password button */}
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="text-gray-400"
          >
            {showNewPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>

        </div>
      </div>



      {/* Confirm Password Input */}
      <div>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>


        {/* Confirm password field with lock icon */}
        <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#C9A84C]">

          <Lock className="w-5 h-5 text-gray-400 mr-2" />


          {/* Confirm password input */}
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />


          {/* Show/Hide confirm password button */}
          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="text-gray-400"
          >
            {showConfirmPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>

        </div>
      </div>



      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}



      {/* Success Message */}
      {success && (
        <p className="text-green-600 text-sm">
          {success}
        </p>
      )}



      {/* Reset Password Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#C9A84C] to-[#B8860B] text-white py-4 rounded-xl font-semibold hover:opacity-90 transition"
      >
        Reset Password
      </button>



      {/* OR Divider */}
      <div className="flex items-center my-4">
        <div className="flex-1 border-t border-gray-300"></div>

        <span className="px-3 text-gray-500 text-sm">
          OR
        </span>

        <div className="flex-1 border-t border-gray-300"></div>
      </div>




      {/* Reset Password With Google Button */}
      <button
        type="button"
        onClick={() => alert("Google Reset Coming Soon")}
        className="w-full border border-gray-300 rounded-xl py-4 flex items-center justify-center gap-3 bg-white hover:bg-gray-50 transition"
      >


        {/* Google Icon */}
        <svg className="w-5 h-5" viewBox="0 0 48 48">

          {/* Google colors paths */}
          <path 
            fill="#FFC107" 
            d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
          />

          <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>

          <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 35 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>

          <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>

        </svg>


        {/* Google button text */}
        <span className="font-medium text-gray-700">
          Reset With Google
        </span>


      </button>



      {/* Back to Login Link */}
      <p className="text-center text-gray-600 mt-6">
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
};

export default ResetPassword;