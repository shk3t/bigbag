import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./ButtonMore.module.css";
import { ABOUT_PATH } from "../../../routes";

const ButtonMore = (props) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        console.log("It work");
        // onClick={() => navigate(PRODUCT_PAGE_ROUTE + "/" + product.id)}
        navigate(ABOUT_PATH);
      }}
      className={classes.moreAboutProduct}
    >
      {props.children}
    </button>
  );
};

export default ButtonMore;
