import React from "react";
import { useSearchParams } from "react-router-dom";
import {
  BIG_BAG,
  BIG_BAG_TYPE,
  POLY_BAG,
  POLY_BAG_TYPE,
  USERS,
} from "..//../../consts";
import BtnNewProduct from "./BtnNewProduct";
import BtnNewBagType from "./BtnNewBagType";

export default function BtnAdminNew() {
  const [searchParams] = useSearchParams();

  switch (searchParams.get("table")) {
    case POLY_BAG:
    case BIG_BAG:
      return <BtnNewProduct />;
    case POLY_BAG_TYPE:
    case BIG_BAG_TYPE:
      return <BtnNewBagType />;
    case USERS:
      return null;
    default:
      return <BtnNewProduct />;
  }
}
