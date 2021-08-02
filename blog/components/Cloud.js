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
        initial={{ x: "-50rem" }}
        animate={{ x: 1800 }}
        transition={{
          repeat: Infinity,
          duration: 30,
        }}
        className={` absolute z-20  ${RandomPos()} `}
      >
        <Cloud1 />
      </motion.div>
      <motion.div
        initial={{ x: "-20rem" }}
        animate={{ x: 1800 }}
        transition={{
          repeat: Infinity,
          duration: 30,
        }}
        className={` absolute z-20  ${RandomPos()} `}
      >
        <Cloud2 />
      </motion.div>
      <motion.div
        initial={{ x: "-50rem" }}
        animate={{ x: 1800 }}
        transition={{
          repeat: Infinity,
          duration: 30,
        }}
        className={` absolute z-20  ${RandomPos()} `}
      >
        <Cloud3 />
      </motion.div>
      <motion.div
        initial={{ x: "-60rem" }}
        animate={{ x: 1800 }}
        transition={{
          repeat: Infinity,
          duration: 30,
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
