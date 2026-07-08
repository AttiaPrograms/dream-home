import Register from "../components/auth/Register";

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


          {/* OR Divider Section */}
          <div className="flex items-center my-6">

            {/* Left Divider Line */}
            <div className="flex-grow h-px bg-gray-200" />

            {/* Divider Text */}
            <span className="px-3 text-gray-400 text-sm">
              OR
            </span>

            {/* Right Divider Line */}
            <div className="flex-grow h-px bg-gray-200" />

          </div>


          {/* Google Register Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 font-medium text-gray-700 hover:bg-gray-50 transition"
          >

            {/* Google SVG Icon */}
            <svg className="w-5 h-5" viewBox="0 0 48 48">

              <path
                fill="#FFC107"
                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
              />

              <path
                fill="#FF3D00"
                d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
              />

              <path
                fill="#4CAF50"
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 35 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
              />

              <path
                fill="#1976D2"
                d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
              />

            </svg>

            Register with Google

          </button>


          {/* Login Redirect Section */}
          <p className="text-center text-gray-500 text-sm mt-6">

            Already have an account?{" "}

            {/* Login Link */}
            <span className="text-[#C9A84C] font-medium cursor-pointer">
              Login
            </span>

          </p>

        </div>

      </div>

    </div>
  );
};

export default RegisterPage;