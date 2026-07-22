function Help(props) {
  const {isDark} = props
  return (
    <div id="help" className={`w-full px-4 sm:px-6 md:px-8 py-10 md:py-16 lg:py-20 ${isDark? 'bg-black':'bg-[#F4FCFB]'}`}>
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-8 md:mb-12">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3em] font-bold leading-tight ${isDark? 'text-[#1bd5c0]':' text-[#0F172A]'}`}>
            How It Works
          </h2>
          <p className={`text-base sm:text-lg md:text-xl  mt-3 sm:mt-4 max-w-3xl mx-auto ${isDark? 'text-[#1bd5c0]':' text-gray-400'}`}>
            Simple steps to protect your code with our advanced obfuscation technology
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-14 ">
          
          <div className={`rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border  ${isDark? 'bg-[#262928] border-[#797c7a]': 'bg-white border-[#e8f8f0]'}`}>
            <div className="flex items-center justify-center w-14 h-14 bg-[#A3DBCA] rounded-full mb-4 mx-auto">
              <span className="text-2xl font-bold text-[#0A836C]">1</span>
            </div>
            <h3 className={`text-xl font-semibold ${isDark? 'text-[#A3DBCA]': 'text- #0F172A]'} text-center mb-2`}>Choose Your Plan</h3>
            <p className={`${isDark? 'text-[#7ea297]':'text-gray-600'} text-center text-sm md:text-base`}>
              Select the protection plan that fits your needs and budget
            </p>
          </div>

          
          <div className={`rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border  ${isDark? 'bg-[#262928] border-[#797c7a]': 'bg-white border-[#e8f8f0]'}`}>
            <div className="flex items-center justify-center w-14 h-14 bg-[#A3DBCA] rounded-full mb-4 mx-auto">
              <span className="text-2xl font-bold text-[#0A836C]">2</span>
            </div>
            <h3 className={`text-xl font-semibold ${isDark? 'text-[#A3DBCA]': 'text- #0F172A]'} text-center mb-2`}>Upload Your Code</h3>
            <p className={`${isDark? 'text-[#7ea297]':'text-gray-600'} text-center text-sm md:text-base`}>
              Upload your source code or executables for protection
            </p>
          </div>

          
          <div className={`rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border  ${isDark? 'bg-[#262928] border-[#797c7a]': 'bg-white border-[#e8f8f0]'}`}>
            <div className="flex items-center justify-center w-14 h-14 bg-[#A3DBCA] rounded-full mb-4 mx-auto">
              <span className="text-2xl font-bold text-[#0A836C]">3</span>
            </div>
            <h3 className={`text-xl font-semibold ${isDark? 'text-[#A3DBCA]': 'text- #0F172A]'} text-center mb-2`}>Get Protected</h3>
            <p className={`${isDark? 'text-[#7ea297]':'text-gray-600'} text-center text-sm md:text-base`}>
              Receive your obfuscated code with advanced security features
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_40px_rgb(0,0,0,0.2)] group">
          <div 
            className="relative bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.2)),url('/assets/images/heroImage.gif')] bg-no-repeat bg-center bg-cover h-75 sm:h-87.5 md:h-100 lg:h-112.5 w-full"
          >
            
           

            
            <div className="absolute top-4 left-4 bg-[#0A836C] text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
              Watch Demo
            </div>
          </div>
        </div>

       
        <div className="mt-8 md:mt-10 flex flex-wrap justify-center items-center gap-6 md:gap-10">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#0A836C]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm text-gray-600">Trusted by 1000+ developers</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#0A836C]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm text-gray-600">24/7 Support Available</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#0A836C]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm text-gray-600">Secure & Encrypted</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;