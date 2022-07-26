import React from "react";
import classes from "./ButtonMore.modules.css";

const ButtonMore = (props) => {
  // return <button className={classes.moreAboutProduct}>{props.children}</button>;
  return <button className="moreAboutProduct">{props.children}</button>;
};

export default ButtonMore;
