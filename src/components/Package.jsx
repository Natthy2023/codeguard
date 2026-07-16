function Package() {
  const packages = [
    {
      name: "Free",
      price: "$0",
      priceEth: "Free",
      features: [
        "Obfuscate by adding junk to source code",
        "One time trial",
        "Basic Obfuscation technique"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonColor: "bg-[#059669]"
    },
    {
      name: "Standard",
      price: "$30",
      priceEth: "30,000 Birr",
      features: [
        "Obfuscate by CRC technique",
        "Obfuscate by encryption",
        "Polymorphic transformations",
        "Unlimited files"
      ],
      popular: true,
      buttonText: "Subscribe Now",
      buttonColor: "bg-[#0A836C]"
    },
    {
      name: "Premium",
      price: "$50",
      priceEth: "50,000 Birr",
      features: [
        "Anti-debug & runtime protections",
        "CRC technique & string encryption",
        "Unlimited files",
        "Protect native executables (exe/dll)",
        "Different obfuscation techniques"
      ],
      popular: false,
      buttonText: "Subscribe Now",
      buttonColor: "bg-[#059669]"
    },
    {
      name: "Ultimate",
      price: "$500",
      priceEth: "500,000 Birr",
      features: [
        "Anti-debug & runtime protections",
        "Protect native executables (exe/dll)",
        "Different obfuscation techniques",
        "Polymorphic transformations",
        "24/7 dedicated support"
      ],
      popular: false,
      buttonText: "Subscribe Now",
      buttonColor: "bg-[#0A836C]"
    }
  ];

  return (
    <div id="packages" className="w-full px-4 sm:px-6 md:px-8 py-10 md:py-16 lg:py-20 flex flex-col items-center text-center gap-y-8 md:gap-y-12 bg-[#F4FCFB]">

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3em] font-bold leading-tight text-[#0F172A]">
          Choose Your Protection Plan
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mt-3 sm:mt-4 max-w-3xl mx-auto">
          Start free and scale as you grow. Advanced security features for every stage of your development journey.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {packages.map((pkg, index) => (
          <div key={index} className="perspective-1000 h-135">
            <div className="relative w-full h-full transition-all duration-700 transform-style-3d hover:rotate-y-180 hover:shadow-2xl hover:rounded-[25px]">

              {/* Front of card */}
              <div
                className={`absolute w-full h-full p-8 sm:p-10 border-2 rounded-[25px] shadow-lg flex flex-col items-center justify-center backface-hidden ${pkg.popular
                  ? 'border-[#14B7A5] bg-linear-to-br from-[#A3DBCA] to-[#e8f8f0] ring-2 ring-[#14B7A5] ring-offset-2'
                  : 'border-[#059669] bg-[#A3DBCA]'
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#14B7A5] text-white text-xs sm:text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap z-10">
                    Most Popular
                  </div>
                )}

                <div className="flex justify-center mb-6">
                  <h3 className="text-2xl sm:text-3xl md:text-[2em] font-bold text-center bg-[#9EEACB] rounded-full w-32 sm:w-40 md:w-44 h-24 sm:h-28 md:h-32 flex items-center justify-center shadow-md">
                    {pkg.name}
                  </h3>
                </div>

                <div className="text-center mb-6">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A836C]">
                    {pkg.priceEth}
                  </p>
                  {pkg.price !== "Free" && (
                    <p className="text-sm text-gray-500 mt-1">per month</p>
                  )}
                </div>

                <button className={`w-4/5 ${pkg.buttonColor} text-white py-3.5 rounded-md hover:opacity-90 transition-all duration-300 font-semibold text-base sm:text-lg shadow-md hover:shadow-lg transform hover:scale-105`}>
                  {pkg.buttonText}
                </button>

                <p className="text-xs text-gray-500 mt-4">Hover to see services</p>
              </div>

              {/* Back of card - Services */}
              <div className="absolute w-full h-full p-8 sm:p-10 border-2 border-[#059669] rounded-[25px] shadow-lg bg-linear-to-br from-[#F4FCFB] to-[#e8f8f0] backface-hidden rotate-y-180 flex flex-col">
                <div className="shrink-0 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A836C] text-center">
                    {pkg.name} Services
                  </h3>
                </div>

                <div className="flex-1 flex items-start justify-center py-2">
                  <ul className="w-full space-y-3 px-2">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm sm:text-base text-gray-700 animate-slideIn"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <span className="text-[#0A836C] font-bold text-lg leading-5 shrink-0">✓</span>
                        <span className="leading-tight text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="shrink-0 mt-4 pt-4 border-t-2 border-[#14B7A5]/30">

                  {/* Button on back face */}
                  <button className={`w-full ${pkg.buttonColor} text-white py-3 rounded-md hover:opacity-90 transition-all duration-300 font-semibold text-base sm:text-lg shadow-md hover:shadow-lg transform hover:scale-105`}>
                    {pkg.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-10 flex flex-wrap justify-center items-center gap-6 md:gap-10">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#0A836C]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-gray-600">Secure payment processing</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#0A836C]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-gray-600">24/7 customer support</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#0A836C]" fill="currentColor"  fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-gray-600">Cancel anytime
          </span>
        </div>
      </div>

    </div>
  );
}

export default Package;