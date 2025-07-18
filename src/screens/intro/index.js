import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import "../intro/styles.css";
import MovingHeadline from "../../components/moving-headline";
import Text from "../../components/typography";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import google from "../../assets/google.svg";
import behance from "../../assets/Behance.svg";
import { motion } from "motion/react";
import Education from "../education";
import Experience from "../experience";
import Skills from "../skills";
import Projects from "../projects";
import Achievements from "../achievements";

const Intro = () => {
  const [knowMoreClick, setKnowMoreClick] = useState(false);

  return (
    <>
      <div className="container-background">
        <MovingHeadline displayText="PORTFOLIO" />
        <div className="cream-background-left"></div>
        <div className="cream-background-right"></div>
        <div className="green-background-center">
          {!knowMoreClick ? (
            <div className="spline-container">
              <div className="spline-avatar">
                <Spline scene="https://prod.spline.design/4Tg4cXXhD2s5jbNt/scene.splinecode" />
              </div>
              <div className="info-box">
                <Text
                  variant="jersey"
                  fontSize={62}
                  color="darkBlue"
                  className="title-text"
                >
                  SAIMA ANSARI
                </Text>
                <Text
                  variant="jersey"
                  fontSize={29}
                  color="darkBlue"
                  className="subtitle-text"
                >
                  Software Developer
                </Text>
                <div className="social-media-container">
                  <a
                    href="https://www.linkedin.com/in/saima-ansari-66a99b188"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} alt="LinkedIn"></img>
                  </a>
                  <a
                    href="https://github.com/SAIMA10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="Github"></img>
                  </a>
                  <a
                    href="mailto:sam.ansari2002@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={google} alt="Gmail"></img>
                  </a>
                  <a
                    href="https://www.behance.net/saimaansari2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={behance} alt="Behance"></img>
                  </a>
                </div>
                <motion.div
                  className="container"
                  onClick={() => setKnowMoreClick(true)}
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
                    <Text variant="press-start" className="know-more-text">
                      Click here to know more!
                    </Text>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="spline-container">
              <div className="spline-avatar">
                <Spline scene="https://prod.spline.design/4Tg4cXXhD2s5jbNt/scene.splinecode" />
              </div>
              <div className="info-box">
                <Text variant="jersey" fontSize={22} color="darkBlue">
                  Hi, I’m Saima — a passionate software engineer driven by
                  creativity, collaboration, and problem-solving.
                </Text>
                <Text variant="jersey" fontSize={22} color="darkBlue">
                  I love building websites and apps that not only work
                  seamlessly but also offer fun and engaging user experiences.
                  I'm a team player who’s always eager to learn and grow. Beyond
                  coding, I have a strong interest in graphic design, which adds
                  an extra layer of creativity to my work.
                </Text>
                <motion.div
                  className="container"
                  onClick={() => setKnowMoreClick(false)}
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
                    <Text variant="press-start" className="know-more-text">
                      Click here to go back
                    </Text>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="container-background">
        <Education />
      </div>
      <div className="container-background">
        <Experience />
      </div>
      <div className="container-background">
        <Skills />
      </div>
      <div className="container-background">
        <Projects />
      </div>
      <div className="container-background">
        <Achievements />
      </div>
    </>
  );
};

export default Intro;
