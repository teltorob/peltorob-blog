import Cloud1 from "../clouds/cloud1.svg";
import Cloud2 from "../clouds/cloud2.svg";
import Cloud3 from "../clouds/cloud3.svg";
import Cloud4 from "../clouds/cloud4.svg";
import { motion } from "framer-motion";

const heights = ["2", "6", "12", "28", "36", "40", "64", "72"];
const Cloud = () => {
  return (
    <>
      <motion.div
        initial={{ x: "-15rem" }}
        animate={{ x: "calc(110vw)" }}
        transition={{
          delay: 0,
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        className={` absolute z-20  ${RandomPos()} `}
      >
        <Cloud1 />
      </motion.div>

      <motion.div
        initial={{ x: "-30rem" }}
        animate={{ x: "calc(110vw)" }}
        transition={{
          delay: 8,
          repeat: Infinity,
          duration: 50,
          ease: "linear",
        }}
        className={` absolute z-20  ${RandomPos()} `}
      >
        <Cloud2 />
      </motion.div>
      <motion.div
        initial={{ x: "-30rem" }}
        animate={{ x: "calc(110vw)" }}
        transition={{
          delay: 16,

          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className={` absolute z-20  ${RandomPos()} `}
      >
        <Cloud3 />
      </motion.div>
      <motion.div
        initial={{ x: "-30rem" }}
        animate={{ x: "calc(110vw)" }}
        transition={{
          delay: 28,

          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className={` absolute z-20  ${RandomPos()} `}
      >
        <Cloud4 />
      </motion.div>
    </>
  );
};

export default Cloud;

function RandomPos() {
  var y = heights[Math.floor(Math.random() * heights.length)];
  return "top-" + y;
}
