import { faAngleUp } from "@fortawesome/free-solid-svg-icons/faAngleUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(props) {
  const { isDark } = props

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#07906A] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 relative">


          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-sm sm:text-base text-white/90">
              &copy; {new Date().getFullYear()} CodeGuard. All rights reserved.
            </p>

          </div>


          <div className="flex gap-6 md:gap-8 order-1 lg:order-2">
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors duration-300">
              Support
            </a>
          </div>


          <div className="order-3">
            <button
              onClick={scrollToTop}
              className="group bg-[#098F7E] hover:bg-[#0A9F8C] px-4 sm:px-5 py-3 rounded-2xl border-2 border-[#16ae88] hover:border-[#2BC4AE] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm sm:text-base font-medium"
            >
              <span>Back to Top</span>
              <FontAwesomeIcon
                icon={faAngleUp}
                className="group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>


      </div>
    </footer>
  );
}

export default Footer;