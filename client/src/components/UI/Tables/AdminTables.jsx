import React from "react";
import { useSearchParams } from "react-router-dom";
import {
  BIG_BAG,
  BIG_BAG_TYPE,
  POLY_BAG,
  POLY_BAG_TYPE,
  USERS,
} from "..//../../consts";
import PolyBagTable from "./PolyBagTable";
import BigBagTable from "./BigBagTable";
import UserTable from "./UserTable";

export default function AdminTables() {
  const [searchParams] = useSearchParams();

  switch (searchParams.get("table")) {
    case POLY_BAG:
      return <PolyBagTable />;
    case BIG_BAG:
      return <BigBagTable />;
    case POLY_BAG_TYPE:
      return <div>Таблица типов пп мешков</div>;
    case BIG_BAG_TYPE:
      return <div>Таблица типов биг-бэг</div>;
    case USERS:
      return <UserTable />;
    default:
      return <PolyBagTable />;
  }
}
