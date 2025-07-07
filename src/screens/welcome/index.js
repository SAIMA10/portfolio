import React, { useEffect, useState } from "react";
import Text from "../../components/typography";
import "../welcome/styles.css";
import { motion } from "motion/react";
import Typewriter from "../../components/typewriter";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        navigate("/home");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]); // Add navigate to dependency array

  return (
    <motion.div className="container-background">
      <motion.div
        className="green-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 1 } }}
      >
        <Typewriter
          text={["Welcome"]}
          speed={120}
          className="text-goldman-typewriter"
          waitTime={1500}
          deleteSpeed={40}
          showSecondText={showSecondText}
          setShowSecondText={setShowSecondText}
          setShowThirdText={() => {}}
        />
        {showSecondText && (
          <Typewriter
            text={["You have entered my portfolio"]}
            speed={120}
            className="text-goldman-typewriter"
            waitTime={1500}
            deleteSpeed={40}
            setShowSecondText={() => {}}
            setShowThirdText={setShowThirdText}
          />
        )}

        {showThirdText && (
          <motion.div
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
          >
            <motion.div
              className="container"
              animate={{ y: ["0%", "-10%", "0%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Text variant="press-start" className="press-start-container">
                Press Enter to start!
              </Text>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Welcome;
