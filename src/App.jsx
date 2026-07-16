import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Package from "./components/Package";
import Help from "./components/Help";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 
function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Package />
        <Help/>
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;