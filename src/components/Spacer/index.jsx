import React from "react";

const Spacer = ({ variant = "" }) => {
  return <div className={`spacer ${variant ? `spacer-${variant}` : ""}`}></div>;
};

export default Spacer;
