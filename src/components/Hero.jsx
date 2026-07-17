function Hero() {
  return(
    <div 
      id="home" 
      className="w-full min-h-screen flex items-center justify-center flex-col text-white py-20 sm:py-28 md:py-40 lg:py-60 sm:px-6 md:px-8 bg-no-repeat bg-cover bg-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3)),url('/assets/images/heroImage.gif')]"
    >
      
      <div className="max-w-8xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5em] font-bold leading-tight">
          Protect Your Code with <span className="text-[#14B7A5]">CodeGuard</span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.8em] px-4 sm:px-8 md:px-12 lg:px-20 mt-4 sm:mt-6 md:mt-8 leading-relaxed max-w-7xl mx-auto">
          CodeGuard is a cloud-based anti-reverse engineering system that protects software using advanced obfuscation, mutation, and runtime protections while keeping performance intact.
        </p>

      
        <button className="bg-[#0A836C] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-md mt-6 sm:mt-8 md:mt-10 hover:bg-[#14B7A5] transition-all duration-500 ease-in-out font-semibold text-base sm:text-lg md:text-xl w-auto min-w-45 sm:min-w-50 shadow-lg hover:shadow-xl transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero;