"use client";
import { React, useState } from "react";
import { ExpandMoreIcon } from "@/components/SVGs";
import { useSpring, animated } from "react-spring";
import {
  AccordionParagraph,
  LargeParagraph,
  MediumParagraph,
  Paragraph,
  SecondaryHeading,
} from "@/components/Typography";

function Accordion(props) {
  console.log(props);
  const [open, setOpen] = useState(false);
  //toggle accordion function
  let toggleHandler = (e) => {
    //switch state
    setOpen(!open);
  };

  //conditional styling
  const styles = {
    //if open is true, show content
    accordionTitle: {
      color: open ? "#7bd6d0" : "#222",
    },
  };
  //open animation with react spring

  // const openAnimation = useSpring({
  //   from: { opacity: "0", maxHeight: "60px" },
  //   to: {
  //     opacity: "1",
  //     maxHeight: open ? "auto" : "60px",
  //   },
  //   config: { duration: "300" },
  // });

  const openAnimation = useSpring({
    from: { opacity: "0", height: "60px" },
    to: {
      opacity: "1",
      height: "auto",
    },
    config: { duration: "300" },
  });

  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#ffff",
    },
    to: {
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      color: open ? "#10d6f5" : "#fff",
    },
    config: { duration: "120" },
  });

  const titleStyles = { color: open ? "" : "" };
  return (
    <animated.div className="accordion__item" style={openAnimation}>
      <div className="accordion__header" onClick={toggleHandler}>
        <AccordionParagraph
          style={styles.accordionTitle}
          content={props.title}
        ></AccordionParagraph>
        <animated.i style={iconAnimation}>
          <ExpandMoreIcon />
        </animated.i>
      </div>
      {open && <p className="accordion__content">{props.text}</p>}
    </animated.div>
  );
}

export default Accordion;
