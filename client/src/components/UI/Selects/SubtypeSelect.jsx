import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setProductAction } from "../../../reducers/productReducer";
import { listSubtypesAction } from "../../../reducers/subtypeListReducer";

export default function SubtypeSelect() {
  const dispatch = useDispatch();
  const { subtypes } = useSelector((state) => state.subtypeListReducer);
  const { product } = useSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(listSubtypesAction(product.type));
  }, []);

  return (
    <select
      onChange={(event) =>
        dispatch(setProductAction({ ...product, subtype: event.target.value }))
      }
    >
      {subtypes.map(({ name: subtype }) => (
        <option key={subtype}>{subtype}</option>
      ))}
    </select>
  );
}
