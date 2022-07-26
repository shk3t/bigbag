import React from "react";
import classes from "./ButtonMore.module.css";

const ButtonMore = (props) => {
  return <button className={classes.moreAboutProduct}>{props.children}</button>;
};

export default ButtonMore;
