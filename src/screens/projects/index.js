import MovingHeadline from "../../components/moving-headline";
import Text from "../../components/typography";
import "./styles.css";
import laptop from "../../assets/laptop.svg";
import mobile from "../../assets/mobile.svg";

const Projects = () => {
  return (
    <>
      <div className="orange-background-left">
        <div className="orange-content">
          <Text variant="montserrat-semibold" fontSize={36}>
            Notes Application
          </Text>
          <Text variant="montserrat-semibold" fontSize={22} color="yellow">
            MERN Stack
          </Text>
          <Text variant="montserrat-semibold" fontSize={20}>
            Feb 2025
          </Text>
        </div>
      </div>
      <div className="graduation-container">
        <img src={laptop} alt="laptop"></img>
      </div>

      <div className="blue-background-right">
        <div className="blue-content">
          <Text variant="montserrat-semibold" fontSize={36} color="whiteText">
            Women Safety Application
          </Text>
          <div className="skills-container-column">
            <div className="skills-container">
              <Text variant="montserrat-semibold" fontSize={18} color="yellow">
                Flutter
              </Text>
              <div className="small-ellipse-yellow-yellow"></div>
              <Text variant="montserrat-semibold" fontSize={18} color="yellow">
                NLP
              </Text>
              <div className="small-ellipse-yellow-yellow"></div>
              <Text variant="montserrat-semibold" fontSize={18} color="yellow">
                Python
              </Text>
            </div>
          </div>
          <Text variant="montserrat-semibold" fontSize={20} color="whiteText">
            2021
          </Text>
        </div>
      </div>

      <div className="blue-background-left">
        <div className="blue-place-text-left">
          <Text
            variant="montserrat-bold-text"
            fontSize={36}
            color="darkBlueText"
          >
            PUNE
          </Text>
        </div>
        <div className="blue-content">
          <Text variant="montserrat-semibold" fontSize={36} color="whiteText">
            Expense Tracker Application
          </Text>

          <div className="skills-container-column">
            <div className="skills-container">
              <Text variant="montserrat-semibold" fontSize={18} color="yellow">
                React
              </Text>
            </div>
          </div>
          <Text variant="montserrat-semibold" fontSize={20} color="whiteText">
            2023
          </Text>
        </div>
      </div>

      <div className="orange-background-right">
        <div className="orange-content">
          <Text variant="montserrat-semibold" fontSize={36}>
            PICT MUN & PICT IEEE College Website
          </Text>
          <div className="skills-container-column">
            <div className="skills-container">
              <Text variant="montserrat-semibold" fontSize={18} color="yellow">
                HTML
              </Text>
              <div className="small-ellipse-yellow"></div>
              <Text variant="montserrat-semibold" fontSize={18} color="yellow">
                CSS
              </Text>
              <div className="small-ellipse-yellow"></div>
              <Text variant="montserrat-semibold" fontSize={18} color="yellow">
                ReactJS
              </Text>
              <div className="small-ellipse-yellow"></div>
              <Text variant="montserrat-semibold" fontSize={18} color="yellow">
                Bootstrap
              </Text>
            </div>
          </div>
          <Text variant="montserrat-semibold" fontSize={20}>
            2020 - 2021
          </Text>
        </div>
      </div>
      <div className="school-container">
        <img src={mobile} alt="laptop"></img>
      </div>
      <MovingHeadline
        displayText="PROJECTS & BUILDS"
        isMiddle={true}
        duration={25}
      />
    </>
  );
};

export default Projects;
