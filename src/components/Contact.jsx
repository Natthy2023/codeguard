import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPhone, 
  faLocation, 
  faEnvelope, 
  faClock,
  faArrowUp, 
  faPrint
} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebook, 
  faLinkedin, 
  faTwitter, 
  faYoutube,
  faGithub 
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div id="contact" className="bg-[#07906A] text-white w-full">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          
          
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">CodeGuard</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Advanced code protection and anti-reverse engineering solutions for developers worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all duration-300 hover:scale-110">
                <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all duration-300 hover:scale-110">
                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
              </a>
              
             
              <a href="mailto:info@codeguard.com" className="bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all duration-300 hover:scale-110">
                <FontAwesomeIcon icon={faPrint} className="w-4 h-4" />
              </a>
            </div>
          </div>

         
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:pl-1">
                  Home
                </a>
              </li>
              <li>
                <a href="#packages" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:pl-1">
                  Packages
                </a>
              </li>
              <li>
                <a href="#help" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:pl-1">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:pl-1">
                  Contact
                </a>
              </li>
            </ul>
          </div>

     
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:pl-1">
                  Code Obfuscation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:pl-1">
                  Anti-Reverse Engineering
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:pl-1">
                  Security Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:pl-1">
                  Enterprise Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-white/60 mt-1 w-4" />
                <div>
                  <p className="text-white/90 text-sm font-medium">+251 924382075</p>
                  <span className="text-white/50 text-xs">Primary Line</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-white/60 mt-1 w-4" />
                <div>
                  <p className="text-white/90 text-sm font-medium">info@codeguard.com</p>
                  <span className="text-white/50 text-xs">Email Support</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faLocation} className="text-white/60 mt-1 w-4" />
                <div>
                  <p className="text-white/90 text-sm font-medium">Addis Ababa, Ethiopia</p>
                  <span className="text-white/50 text-xs">Headquarters</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faClock} className="text-white/60 mt-1 w-4" />
                <div>
                  <p className="text-white/90 text-sm font-medium">24/7 Support</p>
                  <span className="text-white/50 text-xs">Always Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Contact;