import React from "react";
import Text from "../typography";
import "../moving-headline/styles.css";
import { colors } from "../../constants";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const MovingHeadline = ({
  displayText,
  isMiddle = false,
  fontSize = 150,
  duration = 20,
}) => {
  //   const firstText = useRef(null);
  //   const secondText = useRef(null);
  //   const thirdText = useRef(null);

  //   let xPercent = 0;
  //   let direction = -1;

  //   useEffect(() => {
  //     requestAnimationFrame(animation);
  //   }, []);

  //   const animation = () => {
  //     if (xPercent <= -100) {
  //       xPercent = 0;
  //     }
  //     gsap.set(firstText.current, { xPercent: xPercent });
  //     gsap.set(secondText.current, { xPercent: xPercent });
  //     gsap.set(thirdText.current, { xPercent: xPercent });

  //     xPercent += 0.05 * direction;
  //     requestAnimationFrame(animation);
  //   };

  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const textWidth = textRef?.current?.offsetWidth;
    const container = containerRef?.current;

    container.style.width = `${textWidth * 2}px`;

    gsap.to(container, {
      x: -textWidth,
      duration: duration,
      ease: "linear",
      repeat: -10,
    });
  }, [displayText]);

  return (
    // <div
    //   className={isMiddle ? `headline-container-middle` : `headline-container`}
    // >
    //   <div className="scroll-container">
    //     <div className="first-headline" ref={firstText}>
    //   <span
    //     className="text-montserrat text-montserrat-bold"
    //     style={{ color: colors["headingBlue"], fontSize: fontSize }}
    //   >
    //     {displayText}
    //   </span>
    //       <div className={`heading-ellipse headline-text`}></div>
    //     </div>
    //     <div className="second-headline" ref={secondText}>
    //       <span
    //         className="text-montserrat text-montserrat-bold"
    //         style={{ color: colors["headingBlue"], fontSize: fontSize }}
    //       >
    //         {displayText}
    //       </span>
    //       <div className={`heading-ellipse headline-text`}></div>
    //     </div>
    //   </div>
    // </div>
    <div
      className={isMiddle ? `headline-container-middle` : `headline-container`}
    >
      <div className="scroll-container" ref={containerRef}>
        <div className="first-headline" ref={textRef}>
          <span
            className="text-montserrat text-montserrat-bold"
            style={{ color: colors["headingBlue"], fontSize: fontSize }}
          >
            {displayText}
          </span>
          <div className={`heading-ellipse headline-text`}></div>
        </div>
        <div className="first-headline">
          <span
            className="text-montserrat text-montserrat-bold"
            style={{ color: colors["headingBlue"], fontSize: fontSize }}
          >
            {displayText}
          </span>
          <div className={`heading-ellipse headline-text`}></div>
        </div>
      </div>
    </div>
  );
};

export default MovingHeadline;
