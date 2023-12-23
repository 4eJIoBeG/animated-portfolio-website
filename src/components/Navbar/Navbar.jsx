import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="navbar">
      {/* SIDEBAR */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 0.5 }}
        >
          SCP
        </motion.span>
        <motion.div
          className="social"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.a href="#" variants={item}>
            <img src="/facebook.png" alt="facebook" />
          </motion.a>
          <motion.a href="#" variants={item}>
            <img src="/instagram.png" alt="instagram" />
          </motion.a>
          <motion.a href="#" variants={item}>
            <img src="/youtube.png" alt="youtube" />
          </motion.a>
          <motion.a href="#" variants={item}>
            <img src="/dribbble.png" alt="dribbble" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
