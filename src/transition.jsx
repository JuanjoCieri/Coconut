import { motion } from "framer-motion";

const transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="fixed top-0 left-0 w-[100%] h-[100vh] bg-[#EF90F8] origin-bottom z-20 flex justify-center items-center"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
<p className="text-white font-bold text-5xl desktop:text-8xl">🥥 Coconut</p>
      </motion.div>
      <motion.div
                className="fixed top-0 left-0 w-[100%] h-[100vh] bg-[#EF90F8] origin-top z-20 "
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default transition