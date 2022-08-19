import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductAction } from "../../../reducers/productReducer";

export default function ProductInput({ field, ...props }) {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productReducer);

  switch (props.type) {
    case "file":
      return (
        <input
          {...props}
          onChange={(event) => {
            product[field + "File"] = event.target.files[0];
            dispatch(setProductAction({ ...product }));
          }}
        />
      );
    case "number":
      const [value, setValue] = useState("");

      useMemo(() => {
        setValue(product[field]);
      }, []);

      return (
        <input
          {...props}
          value={value}
          onChange={(event) => {
            const value = event.target.value;
            setValue(value.replace(/^0+(?=\d)/, ""));
            product[field] = Number(value);
            dispatch(setProductAction({ ...product }));
          }}
        />
      );
    case "text":
    default:
      return (
        <input
          {...props}
          value={product[field]}
          onChange={(event) => {
            product[field] = event.target.value;
            dispatch(setProductAction({ ...product }));
          }}
        />
      );
  }
}
