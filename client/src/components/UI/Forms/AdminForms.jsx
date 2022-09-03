import React from "react";
import { useSearchParams } from "react-router-dom";
import {
  BIG_BAG,
  BIG_BAG_TYPE,
  POLY_BAG,
  POLY_BAG_TYPE,
} from "../../../consts";
import PolyBagForm from "./PolyBagForm.jsx";

export default function AdminForms() {
  const [searchParams] = useSearchParams();

  switch (searchParams.get("table")) {
    case POLY_BAG:
      return <PolyBagForm />;
    case BIG_BAG:
      return <div>Форма биг-бэгов</div>;
    case POLY_BAG_TYPE:
      return <div>Форма типов пп мешков</div>;
    case BIG_BAG_TYPE:
      return <div>Форма типов биг-бэг</div>;
    default:
      return <PolyBagForm />;
  }
}

