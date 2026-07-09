import Login from "../components/auth/Login";


export default function LoginPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#F5F0EB] overflow-hidden p-2 lg:p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden">

        {/* Left Section */}
        <div
          className="hidden lg:flex relative items-center justify-center bg-cover bg-center min-h-[600px]"
          style={{ backgroundImage:"url(/assets/images/blog/blog2.jpg)"}}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-10">
            <h1 className="text-5xl font-bold text-white mb-4">
              Dream Home
            </h1>

            <h2 className="text-2xl font-semibold text-[#C9A84C] mb-6">
              Real Estate & Property Platform
            </h2>

            <p className="text-lg text-gray-200 leading-8">
              Find your dream property with trusted real estate services.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center p-6 lg:p-8">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-[#1A2A3A] mb-2 text-center">
              Login
            </h2>

            <p className="text-[#7F8C8D] text-base mb-6 text-center">
              Sign in to continue
            </p>

            <Login />

            
          </div>
        </div>
      </div>
    </div>
  );
}