import React from "react";
import { useSearchParams } from "react-router-dom";
import {
    BAG_TYPE_MAPPING,
  BIG_BAG,
  BIG_BAG_TYPE,
  POLY_BAG,
  POLY_BAG_TYPE,
  USERS,
} from "../../../consts";
import PolyBagForm from "./PolyBagForm.jsx";
import BigBagForm from "./BigBagForm.jsx";
import BagTypeForm from "./BagTypeForm.jsx";
import UserForm from "./UserForm.jsx";

export default function AdminForms() {
  const [searchParams] = useSearchParams();
  const table = searchParams.get("table");

  switch (table) {
    case POLY_BAG:
      return <PolyBagForm />;
    case BIG_BAG:
      return <BigBagForm />;
    case POLY_BAG_TYPE:
    case BIG_BAG_TYPE:
      return <BagTypeForm type={BAG_TYPE_MAPPING[table]} />;
    case USERS:
      return <UserForm />;
    default:
      return <PolyBagForm />;
  }
}

