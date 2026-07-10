import Register from "../components/auth/Register";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4 py-2 overflow-hidden">

      {/* Main Register Card Container */}
      <div className="w-full max-w-4xl lg:max-w-5xl h-[620px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
      
        {/* Left Side - Image & Website Introduction */}
        <div
          className="hidden md:flex md:w-1/2 relative bg-cover bg-center p-10 flex-col justify-center"
          style={{
            backgroundImage: "url(/assets/images/blog/blog2.jpg)",
          }}
        >

          {/* Dark overlay on image for better text visibility */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Image Text Content */}
          <div className="relative z-10 text-center px-10">

            {/* Main Website Heading */}
            <h1 className="text-5xl font-bold text-white mb-4">
              Dream Home
            </h1>

            {/* Website Category Title */}
            <h2 className="text-2xl font-semibold text-[#C9A84C] mb-6 whitespace-nowrap">
              Real Estate & Property Platform
            </h2>

            {/* Short Website Description */}
            <p className="text-lg text-gray-200 leading-8">
              Find your dream property with trusted real estate services.
            </p>

          </div>
        </div>


        {/* Right Side - Registration Form Area */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">

          {/* Page Title */}
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Register
          </h2>


          {/* Page Subtitle */}
          <p className="text-gray-500 text-center mb-8">
            Create an account to continue
          </p>


          {/* Register Form Component */}
          <Register />


          {/* Login Redirect Section */}
          <p className="text-center text-gray-500 text-sm mt-6">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-[#C9A84C] font-medium hover:underline"
            >
              Login
            </Link>

          

          </p>

        </div>

      </div>

    </div>
  );
};

export default RegisterPage;