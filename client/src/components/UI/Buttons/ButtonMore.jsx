import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./ButtonMore.module.css";
import { PRODUCTS_PATH } from "../../../consts";

const ButtonMore = (props) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(PRODUCTS_PATH + "/" + props.id);
      }}
      className={classes.moreAboutProduct}
    >
      {props.children}
    </button>
  );
};

export default ButtonMore;
