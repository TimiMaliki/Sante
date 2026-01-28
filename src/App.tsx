import { useEffect, useState } from "react";
import Navbar from "./Pages/Navbar";
import { SelectedPage } from "./shared/type";
import Home from "./Pages/Home/Home";
import ShuffleHero from "./Pages/Home/ShuffleHero";
import Benefits from "./Pages/Benefits/Benefits";
import ContactUs from "./Pages/ContactUs/Contact";
import Footer from "./Pages/Footer/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } else {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className="app">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
        <Home   setSelectedPage={setSelectedPage}/>
        <Benefits setSelectedPage={setSelectedPage}/>
        <ShuffleHero />
        <ContactUs setSelectedPage={setSelectedPage}/>
        <Footer/>
    </div>
  );
}

export default App;
