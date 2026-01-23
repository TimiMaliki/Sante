import { SelectedPage } from "../../shared/type";
import ActionsButtons from "../../shared/ActionsButtons";
import useMediaQuery from "../../hooks/mediaQuery";
import HomePagesText from "../../assets/HomePageText.png"
import HomePageGraphic from "../../assets/HomePageGraphic.png"
import SponsorRedBull from "../../assets/SponsorRedBull.png"
import SponsorForbes from "../../assets/SponsorForbes.png"
import SponsorFortune from "../../assets/SponsorFortune.png"

type Props = {
     setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const  isLargerScreenSize = useMediaQuery("(min-width: 1060px)")  
  return (
    <section id="home" className="gap-16 bg-gray-50 py-10 md:h-full md:pb-0">
      {/* Image And Main Header */}
      <div>
        {/* main header */}
        <div>
          
        </div>

        {/* image */}

      </div>

    </section>
  )
}

export default Home