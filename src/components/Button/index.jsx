import React from "react";

const Button = ({ text, href }) => {
  return (
    <a className="button" href={href ? href : ""} target="_blank">
      {text}
    </a>
  );
};

export default Button;
