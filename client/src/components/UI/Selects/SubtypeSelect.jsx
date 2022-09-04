import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { POLY_BAG } from "../../../consts";
import { setProductAction } from "../../../reducers/productReducer";
import { listSubtypesAction } from "../../../reducers/subtypeListReducer";

export default function SubtypeSelect() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.product);
  const subtypes = useSelector((state) => state.subtypeListReducer.subtypes);

  useEffect(() => {
    dispatch(listSubtypesAction(searchParams.get("table") || POLY_BAG));
  }, [searchParams]);

  return (
    <select
      value={product.subtype || ""}
      onChange={(event) =>
        dispatch(setProductAction({ ...product, subtype: event.target.value }))
      }
    >
      <option defaultValue={null} hidden>Выберите тип мешка</option>
      {subtypes.map(({ name: subtype }) => (
        <option key={subtype}>{subtype}</option>
      ))}
    </select>
  );
}
