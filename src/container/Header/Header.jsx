/*import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <div className="app__header app__flex min-h-screen">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge absolute top-[10rem] left-4">
          <div className="badge-cmp app__flex flex justify-center items-center drop-shadow-lg">
            <span className="text-4xl">👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="text-4xl head-text font-bold">Prejith</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex w-max mt-4 drop-shadow-lg">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img flex justify-center items-center relative"
      >
        <img
          className="rounded-full w-[570px] h-[570px]  z-10 mt-10"
          src={images.new_profile}
          alt="profile_bg"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle mt-24  z-0"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles  absolute right-56 top-40"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div
            className="circle-cmp app__flex w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center drop-shadow-lg"
            key={`circle-${index}`}
          >
            <img className="w-[60%] h-[60%]" src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
*/

import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex min-h-screen">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge absolute top-[10rem] left-4">
          <div className="badge-cmp app__flex flex justify-center items-center drop-shadow-lg">
            <span className="text-4xl">👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="text-4xl head-text font-bold">Prejith</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex w-max mt-4 drop-shadow-lg">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img flex justify-center items-center relative"
      >
        <img
          className="rounded-full w-[570px] h-[570px]  z-10 mt-10"
          src={images.new_profile}
          alt="profile_bg"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle mt-24  z-0"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles  absolute right-56 top-40"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div
            className="circle-cmp app__flex w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center drop-shadow-lg"
            key={`circle-${index}`}
          >
            <img className="w-[60%] h-[60%]" src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
