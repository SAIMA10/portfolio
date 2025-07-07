import React from "react";
import Lottie from "lottie-react";
import catRunning from "../../assets/cat-running2.json";
import { colors } from "../../constants";
import CountUp from "../../components/count-up";
import "../loading/styles.css";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();
  return (
    <div className="container-background">
      <Lottie animationData={catRunning} loop={true} />
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CountUp
          from={0}
          to={100}
          separator=","
          direction="up"
          duration={2}
          className="count-up-text"
          onEnd={() => navigate("/welcome")}
        />
        <span style={{ marginLeft: "2px" }} className="count-up-text">
          %
        </span>
      </div>
    </div>
  );
};

export default Loading;
