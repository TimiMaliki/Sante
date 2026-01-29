import HText from "../../shared/Htext";
import { BenefitType, SelectedPage } from "../../shared/type";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Index from "./index";
import ActionsButtons from "../../shared/ActionsButtons";

const benefits: Array<BenefitType> = [
  {
  icon: <HomeModernIcon className="h-6 w-6 text-black" />,
  title: "State of the Art Facilities",
  description:
    "Train in a modern, fully equipped environment designed for performance and comfort. Our facilities feature cutting-edge equipment, spacious workout areas, and a clean, motivating atmosphere.",
},
{
  icon: <UserGroupIcon className="h-6 w-6 text-black" />,
  title: "100's of Diverse Classes",
  description:
    "From high-energy group workouts to focused strength and wellness sessions, our wide range of classes suits every fitness level, goal, and schedule.",
},
{
  icon: <AcademicCapIcon className="h-6 w-6 text-black" />,
  title: "Expert and Pro Trainers",
  description:
    "Work with certified professionals who are passionate about results. Our trainers provide personalized guidance, proper technique, and constant motivation to help you reach your full potential.",
},

];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 overflow-hidden">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-md font-bold text-black">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Index
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-black text-lg">
                Every detail of our gym is designed to support your progress. From structured
                training programs to expert-led sessions, we focus on helping you build
                strength, improve endurance, and stay consistent over time.
              </p>
              <p className="mb-5 text-black text-lg">
                Whether your goal is fat loss, muscle gain, or overall wellness, you’ll train
                in an environment that prioritizes safety, motivation, and measurable
                results so you can perform at your best every day.
              </p>

            </motion.div>

            {/* BUTTON */}
            {/* <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionsButtons setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionsButtons>
              </div>
            </div> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;