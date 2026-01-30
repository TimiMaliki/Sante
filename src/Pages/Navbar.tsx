import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "../assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "../shared/type";
import useMediaQuery from "../hooks/mediaQuery";
import ActionsButtons from "../shared/ActionsButtons";


type Props = {
   isTopOfPage:boolean
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage,selectedPage, setSelectedPage }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const  isLargerScreenSize = useMediaQuery("(min-width: 1060px)")  
  const navbarBackround = isTopOfPage ? "bg-white/100 text-black " : "bg-white/50  text-black"
  const flexBetween = "flex items-center justify-between";
  
  return (
    <nav>
      <div className={`${navbarBackround}${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} />

            {/* RIGHT SIDE */}
            { isLargerScreenSize ? (
            
          
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-md ${navbarBackround}`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
               <div className={`${flexBetween} gap-8`}>
                  <p className={`${navbarBackround} cursor-pointer`}>Sign In</p>
                 <ActionsButtons setSelectedPage={setSelectedPage}>
                     Become a Member
                 </ActionsButtons>
                 
                </div>
            </div>  
    
            ) : (
           
              <button
                className="rounded-full bg-red-600 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )

          }
            
          </div>
        </div>
      </div>
 {/* MOBILE MENU MODAL */}
      {!isLargerScreenSize && isMenuOpen && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-75 bg-red-700 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col  gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
