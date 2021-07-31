import ExCloud from "../clouds/cloud2.svg";

const heights = ["2", "6", "12", "28", "36", "40", "64", "72"];
const Cloud = () => {
  return (
    <div className={`absolute z-20 ${RandomPos()}`}>
      <ExCloud />
    </div>
  );
};

export default Cloud;

function RandomPos() {
  var y = heights[Math.floor(Math.random() * heights.length)];
  return "top-" + y;
}
