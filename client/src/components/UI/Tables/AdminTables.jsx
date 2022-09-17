import React from "react";
import { useSearchParams } from "react-router-dom";
import {
    BAG_TYPE_MAPPING,
  BIG_BAG,
  BIG_BAG_TYPE,
  POLY_BAG,
  POLY_BAG_TYPE,
  USERS,
} from "..//../../consts";
import PolyBagTable from "./PolyBagTable";
import BigBagTable from "./BigBagTable";
import BagTypeTable from "./BagTypeTable";
import UserTable from "./UserTable";

export default function AdminTables() {
  const [searchParams] = useSearchParams();
  const table = searchParams.get("table");

  switch (table) {
    case POLY_BAG:
      return <PolyBagTable />;
    case BIG_BAG:
      return <BigBagTable />;
    case POLY_BAG_TYPE:
    case BIG_BAG_TYPE:
      return <BagTypeTable type={BAG_TYPE_MAPPING[table]} />;
    case USERS:
      return <UserTable />;
    default:
      return <PolyBagTable />;
  }
}
