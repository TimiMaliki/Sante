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
      <motion.div 
       className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >

        {/* main header */}
        <div
        className="z-10 mt-32 md:basis-3/5"
        >
          {/* heading */}
          <motion.div
           className="md:-mt-20"
           initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div
            className="relative"
            >
              <div
            className="absolute -top-20 before:-left-20 z-[-1] hidden md:hidden lg:block"
              >
                 <img src={evolvetext} alt="" className="]" />
               </div>
                <img src={HomePagesText} alt="home" />
              
            </div>
            <p className="mt-8  text-2xl text-black">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/* actions */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
           
           >
            <ActionsButtons setSelectedPage={setSelectedPage}>
              Join Now
            </ActionsButtons>
            <AnchorLink
              className="text-sm font-bold text-red-700 underline hover:text-red-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>


        {/* image */}
        <div className="flex basis-3/5 justify-center md:z-10  md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="Home-pageGraphics" />
        </div>
      </motion.div>

    {/* Sponsors  */}

       {isLargerScreenSize && (
        <div className="h-37.5 w-full bg-red-700 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-full items-center  justify-between gap-8">
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