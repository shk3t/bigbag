import React from "react";
import classes from "./ButtonMore.module.css";
import { ABOUT_PAGE_ROUTE } from "../../../utils/consts";
import { useNavigate } from "react-router-dom";

const ButtonMore = (props) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        console.log("It work");
        // onClick={() => navigate(PRODUCT_PAGE_ROUTE + "/" + product.id)}
        navigate(ABOUT_PAGE_ROUTE);
      }}
      className={classes.moreAboutProduct}
    >
      {props.children}
    </button>
  );
};

export default ButtonMore;
