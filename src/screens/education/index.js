import React from "react";
import MovingHeadline from "../../components/moving-headline";
import "../education/styles.css";
import Text from "../../components/typography";
import school from "../../assets/menu_book.svg";
import graduation from "../../assets/school.svg";

const Education = () => {
  return (
    <>
      <div className="orange-background-left">
        <div className="orange-place-text-left">
          <Text
            variant="montserrat-bold-text"
            fontSize={36}
            color="darkOrangeText"
          >
            PUNE
          </Text>
        </div>
        <div className="orange-content">
          <Text variant="montserrat-semibold" fontSize={36}>
            Pune Institute of Computer Technology
          </Text>
          <Text variant="montserrat-semibold" fontSize={22} color="yellow">
            Bachelor of Engineering (Computer Science)
          </Text>
          <Text variant="montserrat-semibold" fontSize={20}>
            2019 - 2023
          </Text>
        </div>
      </div>
      <div className="graduation-container">
        <img src={graduation} alt="graduation"></img>
      </div>
      <div className="orange-background-right">
        <div className="orange-place-text-right">
          <Text
            variant="montserrat-bold-text"
            fontSize={36}
            color="darkOrangeText"
          >
            DUBAI
          </Text>
        </div>
        <div className="orange-content">
          <Text variant="montserrat-semibold" fontSize={36}>
            Our Own English High School
          </Text>
          <Text variant="montserrat-semibold" fontSize={22} color="yellow">
            High Senior Secondary Certificate
          </Text>
          <Text variant="montserrat-semibold" fontSize={20}>
            2012 - 2019
          </Text>
        </div>
      </div>
      <div className="school-container">
        <img src={school} alt="graduation"></img>
      </div>
      <MovingHeadline displayText="EDUCATION" isMiddle={true} />
    </>
  );
};

export default Education;
