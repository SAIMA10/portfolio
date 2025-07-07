import React from "react";
import MovingHeadline from "../../components/moving-headline";
import "./styles.css";
import Text from "../../components/typography";
import school from "../../assets/menu_book.svg";
import graduation from "../../assets/school.svg";
import GlareHover from "../../components/glare-hover";
import { colors } from "../../constants";

const Skills = () => {
  return (
    <>
      <div className="cream-background-left">
        <div className="cream-content">
          <div className="cream-content-row">
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                Python
              </Text>
            </div>
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                C++
              </Text>
            </div>
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                SQL
              </Text>
            </div>
          </div>
          <div className="cream-content-row">
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                ReactJS
              </Text>
            </div>
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                React Native
              </Text>
            </div>
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                HTML
              </Text>
            </div>
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                CSS
              </Text>
            </div>
          </div>
          <div className="cream-content-row">
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                Javascript
              </Text>
            </div>
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                Typescript
              </Text>
            </div>
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                NodeJS
              </Text>
            </div>
          </div>
          <div className="cream-content-row">
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                MongoDB
              </Text>
            </div>
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                Express
              </Text>
            </div>
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                Bootstrap
              </Text>
            </div>
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                NextJS
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="cream-background-right">
        <div className="cream-content-down">
          <div className="cream-content-row">
            {/* <GlareHover
              glareColor={colors["orange"]}
              glareOpacity={0.5}
              glareAngle={-30}
              glareSize={600}
              transitionDuration={800}
              playOnce={false}
            > */}
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                Adobe Photoshop
              </Text>
            </div>
            {/* </GlareHover> */}
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                Adobe Illustrator
              </Text>
            </div>
          </div>
          <div className="cream-content-row">
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                Adobe InDesign
              </Text>
            </div>
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                Jitter
              </Text>
            </div>
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                Spline
              </Text>
            </div>
          </div>
          <div className="cream-content-row">
            <div className="skill-container-rounded">
              <Text variant="montserrat-semibold" fontSize={25} color="orange">
                Adobe Premiere Pro
              </Text>
            </div>
          </div>
        </div>
      </div>

      <MovingHeadline
        displayText="TECHNICAL & CREATIVE SKILLS"
        isMiddle={true}
        duration={25}
      />
    </>
  );
};

export default Skills;
