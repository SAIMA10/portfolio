import React from "react";
import { colors } from "../../constants";
import "../typography/styles.css";

/* 
variants: goldman, press-start, hammersmith, jersey 25, montserrat, montserrat-semibold
*/

const Text = ({
  children,
  variant = "",
  fontSize = 13,
  color = "whiteText",
  className,
}) => {
  const baseClass = "text";
  const variantClass = `text-${variant}`;

  return (
    <span
      className={`${baseClass} ${variantClass} ${className || ""}`}
      style={{ color: color ? colors[color] : "black", fontSize: fontSize }}
    >
      {children}
    </span>
  );
};

export default Text;
