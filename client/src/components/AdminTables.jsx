import React from "react";
import {
  BIG_BAG,
  BIG_BAG_TYPE,
  POLY_BAG,
  POLY_BAG_TYPE,
} from "../consts";
import PolyBagTable from "../components/PolyBagTable";
import BigBagTable from "../components/BigBagTable";
import { useSearchParams } from "react-router-dom";

export default function AdminTables() {
  const [searchParams] = useSearchParams();

  switch (searchParams.get("table")) {
    case POLY_BAG:
      return <PolyBagTable />;
    // return <CreatePolyBagForm />;
    case BIG_BAG:
      return <BigBagTable />;
    case POLY_BAG_TYPE:
      return <div>Таблица типов пп мешков</div>;
    case BIG_BAG_TYPE:
      return <div>Таблица типов биг-бэг</div>;
    default:
      return <PolyBagTable />;
  }
}
