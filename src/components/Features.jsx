import { useState, useEffect } from "react";

function Features(props) {
  const {isDark} = props

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cardContent = [
    {
      imgUrl: './assets/images/card-2-img1.png',
      h3: 'Multiple Coding Support',
      p: 'Our process ensures code obfuscation that protects your work without sacrificing functionality. Enjoy robust security across multiple languages.',
    },
    {
      imgUrl: './assets/images/card-2-img2.png',
      h3: 'Advanced Code Protection',
      p: 'Our cutting-edge obfuscation algorithms ensure your software remains protected from reverse engineering attempts.',
    },
    {
      imgUrl: './assets/images/card-2-img3.png',
      h3: 'Fast and Secure',
      p: 'We ensure rapid obfuscation without compromising the safety or integrity of your software.',
    },
    {
      imgUrl: './assets/images/card-2-img4.png',
      h3: 'Multiple File Support',
      p: 'Our platform supports a wide range of software types, easily handling .exe, .dll, .jar, and other formats.',
    }
  ];

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % cardContent.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + cardContent.length) % cardContent.length;
    goToSlide(prevIndex);
  };

 
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const { imgUrl, h3, p } = cardContent[currentIndex];

  return (
    <div id="features" className={`w-full px-4 sm:px-6 md:px-8 py-10 md:py-16 lg:py-20 flex flex-col items-center text-center gap-y-8 md:gap-y-12 bg-[#F4FCFB] ${isDark? 'bg-black': 'bg-white'}`}>
     
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3em] font-bold leading-tight ${isDark? 'text-[#1bd5c0]':'text-[#0F172A]'}`}>
          Main Features
        </h2>
        <p className={`text-base sm:text-lg md:text-xl  mt-3 sm:mt-4 max-w-3xl mx-auto ${isDark? 'text-[#1bd5c0] ':'text-gray-400'}`}>
          Advanced security orbiting around your development ecosystem. Every language protected, every threat neutralized.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-stretch gap-6 md:gap-8 lg:gap-10 xl:gap-12">

      
        <div className="w-full lg:w-1/2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow duration-300 overflow-hidden bg-white">
          <div className='p-4 sm:p-6 md:p-8'>
            <h3 className="text-xl sm:text-2xl md:text-[1.7em] font-semibold text-center p-3 sm:p-4 md:p-5 pt-6 sm:pt-8 md:pt-10 text-[#0F172A]">
              Multi-Language Protection System
            </h3>
            <div className="w-full">
              <img
                className="w-full h-auto object-cover"
                src="./assets/images/spinImage.png"
                alt="Multi-language protection system"
              />
            </div>
          </div>
        </div>

        
        <div className={`w-full lg:w-1/2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow duration-300 overflow-hidden  flex flex-col relative ${isDark? 'bg-[#262928]':'bg-white'}`}>
          
         
          <div className="relative w-full overflow-hidden">
            <div 
              className={`w-full transition-transform duration-500 ease-in-out`}
              style={{ transform: `translateX(0px)` }}
            >
              <img
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                src={imgUrl}
                alt={h3}
              />
            </div>

          
         
          </div>

         
          <div className="text-left p-4 sm:p-6 md:p-8 grow">
            <h3 className={`text-xl sm:text-2xl md:text-[1.7em] font-semibold  ${isDark? 'text-[#1BD5C0]':'text-[#0F172A]'}`}>
              {h3}
            </h3>
            <p className={`text-sm sm:text-base md:text-[1.1em] pt-2 sm:pt-3 md:pt-4  ${isDark? 'text-[#d8dcdb]':'text-gray-500'} leading-relaxed`}>
              {p}
            </p>
            
           
            <div className="pt-4 sm:pt-5 md:pt-6 flex items-center justify-between">
              <div className="flex gap-x-2 items-center">
                <span className="size-4 sm:size-5 rounded-full block bg-[#36dcbe] animate-pulse"></span>
                <p className={`text-sm sm:text-base ${isDark? 'text-[#b8b1b1]': 'text-gray-500'} font-medium`}>Active Protection</p>
              </div>
              
             
              <div className="flex gap-1.5">
                <button
                  onClick={prevSlide}
                  className="bg-[#0A836C]/10 hover:bg-[#0A836C]/20 text-[#0A836C] rounded-full w-7 h-7 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Previous slide"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-[#0A836C]/10 hover:bg-[#0A836C]/20 text-[#0A836C] rounded-full w-7 h-7 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Next slide"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

         
          <div className="flex justify-center gap-2 pb-4 sm:pb-5 md:pb-6">
            {cardContent.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-[#0A836C]' 
                    : 'w-2 bg-[#0A836C]/30 hover:bg-[#0A836C]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;