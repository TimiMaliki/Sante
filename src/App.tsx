import { useEffect, useState } from "react";
import Navbar from "./Pages/Navbar";
import { SelectedPage } from "./shared/type";
import Home from "./Pages/Home";

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
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
        <Home   setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;
