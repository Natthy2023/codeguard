import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Package from "./components/Package";
import Help from "./components/Help";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {

  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  }



  return (
    <div className="w-full min-h-screen bg-white">
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