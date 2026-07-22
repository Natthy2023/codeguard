import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Package from "./components/Package";
import Help from "./components/Help";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
function App() {

  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  }



  return (
    <div id="#home" className="w-full min-h-screen bg-white relative">
        <div className={`${isDark? 'bg-[#CEE6E2] border-2 border-[#4b4f4e]':'bg-[#262928] border-2 border-[#20e7d0]'} size-14 fixed bottom-5 right-5 flex flex-col items-center justify-center text-3xl hover:size-15 transition duration-300 ease hover:bg-transparent rounded-full z-20`}>
          <a href="#">
        <FontAwesomeIcon className={`${isDark? 'text-gray-800':'text-[#14B7A5]'} hover:text-[#20e7d0]`} size="30" icon={faArrowUp}/>
       </a>
        </div>
      <Header toggle={toggleDarkMode} isDark={isDark}  />
      <main>
        <Hero/>
        <Features isDark={isDark} setIsDark={setIsDark} />
        <Package isDark={isDark} setIsDark={setIsDark} />
        <Help isDark={isDark} setIsDark={setIsDark} />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;