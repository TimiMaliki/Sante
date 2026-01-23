import { SelectedPage } from "../../shared/type";
import ActionsButtons from "../../shared/ActionsButtons";
import useMediaQuery from "../../hooks/mediaQuery";
import { motion } from "framer-motion";
import HomePagesText from "../../assets/HomePageText.png"
import HomePageGraphic from "../../assets/HomePageGraphic.png"
import SponsorRedBull from "../../assets/SponsorRedBull.png"
import SponsorForbes from "../../assets/SponsorForbes.png"
import SponsorFortune from "../../assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
     setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const  isLargerScreenSize = useMediaQuery("(min-width: 1060px)")  
  return (
    <section id="home" className="gap-16  py-10 md:h-full md:pb-0">

      {/* Image And Main Header */}
      <div>

        {/* main header */}
        <div>
          {/* heading */}
          <div>
            <div>
              <div>
                <img src={HomePagesText} alt="home" />
              </div>
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
              className="text-sm font-bold text-red-500 underline hover:text-yellow-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>


        {/* image */}
       <div>

       </div>
      </div>

    </section>
  )
}

export default Home