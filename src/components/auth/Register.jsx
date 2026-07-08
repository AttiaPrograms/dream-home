import {useState} from "react";
import {User, Mail, Lock, Eye, EyeOff} from "lucide-react";

const Register = () => {

    // Password show/hide karne ke liye state
    const [showPassword, setShowPassword] = useState(false);

    // Form fields ka data store karne ke liye state
    const [formData, setFormData] = useState({
        name: "",
        email:"",
        password:"",
    });

    // Input fields ki value update karne ka function
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    // Form submit hone par ye function run hota hai
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("FormData:", formData);
    };

    return (
        // Register form container
        <form onSubmit={handleSubmit} className="space-y-5 w-full">

            {/* Name Input Field */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                </label>

                {/* Name input with user icon */}
                <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#C9A84C]">
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


            {/* Email Input Field */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>

                {/* Email input with mail icon */}
                <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#C9A84C]">
                   
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


            {/* Password Input Field */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                </label>

                {/* Password input with lock icon and visibility toggle */}
                <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#C9A84C]">
                    
                    <Lock className="w-5 h-5 text-gray-400 mr-2"/>

                    <input 
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your Password"
                      className="w-full outline-none text-gray-700 placeholder-gray-400"
                    />

                    {/* Password show/hide button */}
                    <button 
                       type="button"
                       onClick={() => setShowPassword(!showPassword)}
                       className="text-gray-400"
                    >
                       {showPassword ? (
                            <EyeOff className="w-5 h-5"/>
                       ) : (
                            <Eye className="w-5 h-5" />
                       )}
                    </button>

                </div>
            </div>


            {/* Register Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#C9A84C] hover:bg-[#C9A84C] text-white font-semibold py-3 rounded-xl shadow-md transition"
            >
                Register
            </button>

        </form>
    );
};

export default Register;