import Login from "../components/auth/Login";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F5F0EB] p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden min-h-[560px]">

        {/* LEFT SIDE: Gradient + Glow */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-[#1A2A3A] to-[#0F172A] text-white p-14 relative overflow-hidden">
          {/* Halka glow background me */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#C9A84C]/20 rounded-full blur-3xl"></div>

          <h2 className="text-5xl font-bold mb-5 z-10">
            Welcome Back
          </h2>
          <p className="text-[#AAB8C2] text-lg leading-8 z-10 max-w-sm">
            Login to access your account and discover your dream property with trusted real estate services.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center p-12 lg:p-16">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-[#1A2A3A] mb-2 text-center">
              Login
            </h2>
            <p className="text-[#7F8C8D] text-base mb-10 text-center">
              Sign in to continue
            </p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}