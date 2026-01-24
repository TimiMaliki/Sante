import { SelectedPage } from "../../shared/type";
import ActionsButtons from "../../shared/ActionsButtons";
import useMediaQuery from "../../hooks/mediaQuery";
import { motion } from "framer-motion";
import HomePagesText from "../../assets/HomePageText.png"
import HomePageGraphic from "../../assets/HomePageGraphic.png"
import SponsorRedBull from "../../assets/SponsorRedBull.png"
import SponsorForbes from "../../assets/SponsorForbes.png"
import SponsorFortune from "../../assets/SponsorFortune.png"
import  evolvetext from "../../assets/EvolveText.png"
import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isLargerScreenSize = useMediaQuery("(min-width: 1060px)")
  return (
    <section id="home" className="gap-16  py-10 md:h-full md:pb-0">

      {/* Image And Main Header */}
      <div 
       className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"

      >

        {/* main header */}
        <div
        className="z-10 mt-32 md:basis-3/5"
        >
          {/* heading */}
          <div
           className="md:-mt-20"
          >
            <div
            className="relative"
            >
              <div
            className="absolute -top-20 before:-left-20 z-[-1]"
              >
                 <img src={evolvetext} alt="" className="]" />
               </div>
                <img src={HomePagesText} alt="home" />
              
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>
          {/* actions */}
          <div>
            <ActionsButtons setSelectedPage={setSelectedPage}>
              Join Now
            </ActionsButtons>
            <AnchorLink
              className="text-sm font-bold text-blue-500 underline hover:text-red-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>


        {/* image */}
        <div>
          <img src={HomePageGraphic} alt="Home-pageGraphics" />
        </div>
      </div>

    {/* Sponsors  */}

       {isLargerScreenSize && (
        <div className="h-37.5 w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
       
    </section>
  )
}

export default Home