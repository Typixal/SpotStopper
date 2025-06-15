import { useState } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");

  const handleNext = () => {
    if (!username || !phoneNumber || !fullName) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Sign up details:", {
      username,
      countryCode,
      phoneNumber,
      fullName,
    });
    // Logic Here...
  };

  const countryCodes = [
    { code: "+1", flag: "🇺🇸", country: "US" },
    { code: "+44", flag: "🇬🇧", country: "UK" },
    { code: "+91", flag: "IN", country: "IN" },
    { code: "+86", flag: "🇨🇳", country: "CN" },
    { code: "+33", flag: "🇫🇷", country: "FR" },
    { code: "+49", flag: "🇩🇪", country: "DE" },
    { code: "+81", flag: "🇯🇵", country: "JP" },
  ];

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-4 font-['Poppins']">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      ></div>

      {/*Blurred Background Overlay */}
      <div className="absolute inset-0 bg-[#111111]/25 backdrop-blur-[132px] shadow-inner"></div>

      <div className="w-full max-w-md bg-[#FAFAFA]/90 backdrop-blur-sm rounded-[24px] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 text-center">
          <div className="w-[48px] h-[48px] bg-[#C4C4C4] rounded-full mx-auto mb-4"></div>
          <h1 className="text-2xl font-semibold text-[#111111] mb-2">
            Sign up
          </h1>
          <p className="text-[#333333] text-regular">Step 1 of 2</p>
        </div>

        {/* Form */}
        <div className="px-8 pb-8 space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm font-regular text-[#666666] mb-2">
              Your Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-[#666666]/35 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-900 "
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-regular text-[#666666] mb-2">
              Phone number
            </label>
            <div className="relative bg-gray-50 border border-[#666666]/35 rounded-xl focus-within:ring-2 focus-within:ring-gray-500 focus-within:border-transparent transition-all duration-200">
              <div className="flex items-center">
                <div className="relative">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="pl-4 pr-8 py-3 bg-transparent border-none focus:outline-none text-gray-900 appearance-none cursor-pointer"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                    <svg
                      className="w-3 h-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-6 bg-gray-300 mx-2"></div>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 py-3 pr-4 bg-transparent border-none focus:outline-none text-gray-900"
                />
              </div>
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-regular text-[#666666] mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-[#666666]/35 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-900 "
            />
          </div>

          {/* Next Button */}
          <div className="pt-4">
            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-br from-[#2B2B2B] to-[#111111] text-white font-medium py-4 px-6 rounded-[40px] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
