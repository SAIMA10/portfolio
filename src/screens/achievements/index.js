import MovingHeadline from "../../components/moving-headline";
import Text from "../../components/typography";
import "./styles.css";
import { motion } from "motion/react";

const Achievements = () => {
  return (
    <>
      <div className="green-background-left">
        <div className="green-content">
          <Text variant="montserrat-semibold" fontSize={36} color="darkBlue">
            Contributed as a Resource Person for Full Stack Web Application
            Development (PICT)
          </Text>

          <Text variant="montserrat-semibold" fontSize={22} color="whiteText">
            2025
          </Text>
        </div>
      </div>

      <div className="blue-background-right">
        <div className="blue-content-wide">
          <Text variant="montserrat-semibold" fontSize={36} color="yellow">
            Research Paper: Evaluation of an Individual’s Creditworthiness
          </Text>
          <Text variant="montserrat-semibold" fontSize={20} color="yellow">
            2023
          </Text>
        </div>
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
              click here to read!
            </Text>
          </motion.div>
        </motion.div>
      </div>

      <div className="green-background-right">
        <div className="green-content">
          <Text variant="montserrat-semibold" fontSize={30} color="darkBlue">
            Full Stack Web Development Workshop (PAPA REACT)
          </Text>
          <Text variant="montserrat-semibold" fontSize={27}>
            2021
          </Text>
        </div>
      </div>

      <div className="blue-background-left">
        <div className="blue-content-wide">
          <Text variant="montserrat-semibold" fontSize={25} color="yellow">
            Served as Design and Technical Head
            <Text variant="montserrat-semibold" fontSize={25}>
              {" "}
              (PICT MUN)
            </Text>
          </Text>
          <Text variant="montserrat-semibold" fontSize={25} color="yellow">
            Served as Design Head
            <Text variant="montserrat-semibold" fontSize={25}>
              {" "}
              (PICT IEEE)
            </Text>
          </Text>
          <Text variant="montserrat-semibold" fontSize={25} color="yellow">
            Secured Runner-Up in Adobe Photoshop Event
            <Text variant="montserrat-semibold" fontSize={25}>
              {" "}
              (PICT)
            </Text>
          </Text>
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
              <Text
                variant="press-start"
                className={`press-start-container text-line-height`}
              >
                Click here to check out my designs!
              </Text>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <MovingHeadline
        displayText="ACHIEVEMENTS"
        isMiddle={true}
        fontSize={138}
      />
    </>
  );
};

export default Achievements;
