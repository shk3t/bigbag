import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductAction } from "../../../reducers/productReducer";

export default function ProductInput({ field, ...props }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.product);
  const modalActive = useSelector(
    (state) => state.adminRequestReducer.modalActive
  );
  const [value, setValue] = useState("");

  useMemo(() => {
    if (modalActive) setValue(product[field]);
  }, [modalActive]);

  switch (props.type) {
    case "checkbox":
      return (
        <input
          {...props}
          checked={product[field] || false}
          onChange={(event) => {
            product[field] = event.target.checked;
            dispatch(setProductAction(product));
          }}
        />
      );
    case "file":
      return (
        <input
          {...props}
          key={modalActive}
          onChange={(event) => {
            product[field + "File"] = event.target.files[0];
            dispatch(setProductAction(product));
          }}
        />
      );
    case "number":
      return (
        <input
          {...props}
          type="text"
          value={value || ""}
          onChange={(event) => {
            const value = event.target.value;
            setValue(value.replace(/^0+(?=\d)/, "").replace(/[^\d\.]/, ""));
            product[field] = Number(value);
            dispatch(setProductAction(product));
          }}
        />
      );
    case "text":
    default:
      return (
        <input
          {...props}
          value={product[field] || ""}
          onChange={(event) => {
            product[field] = event.target.value;
            dispatch(setProductAction(product));
          }}
        />
      );
  }
}
