import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

const Register = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleGoogleRegister = () => {
    alert("Google Register Clicked!");
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.password.trim()
    ) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    alert("Registration Successful!");
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-3 w-full">

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>

        <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2.5 focus-within:ring-2 focus-within:ring-[#C9A84C]">

          <User className="w-5 h-5 text-gray-400 mr-2"/>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />

        </div>
      </div>


      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>

        <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2.5 focus-within:ring-2 focus-within:ring-[#C9A84C]">

          <Mail className="w-5 h-5 text-gray-400 mr-2"/>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />

        </div>
      </div>


      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>

        <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2.5 focus-within:ring-2 focus-within:ring-[#C9A84C]">

          <Lock className="w-5 h-5 text-gray-400 mr-2"/>

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your Password"
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />


          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400"
          >
            {
              showPassword 
              ? <EyeOff className="w-5 h-5"/>
              : <Eye className="w-5 h-5"/>
            }
          </button>

        </div>
      </div>


      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}



      {/* Register Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#C9A84C] to-[#B8860B] text-white py-3 rounded-xl font-semibold cursor-pointer"
      >
        Register
      </button>



      {/* OR */}
      <div className="flex items-center my-2">
        <hr className="flex-1 border-gray-300"/>
        <span className="mx-3 text-gray-400 text-xs">
          OR
        </span>
        <hr className="flex-1 border-gray-300"/>
      </div>



      {/* Google Button */}
      <button
        type="button"
        onClick={handleGoogleRegister}
        className="w-full border border-gray-300 rounded-xl py-3 font-medium flex items-center justify-center gap-3 hover:bg-gray-50 text-gray-700 transition"
      >

        <img
          src="https://www.google.com/favicon.ico"
          alt="Google"
          className="w-5 h-5"
        />

        Register with Google

      </button>


    </form>
  );
};


export default Register;