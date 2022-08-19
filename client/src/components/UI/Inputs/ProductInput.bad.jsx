import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductAction } from "../../../reducers/productReducer";

export default function ProductInput({ field, ...props }) {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productReducer);
  const [event, setEvent] = useState();

  // Статртовое значение input value
  useMemo(() => {
    props.value = product[field];
  }, []);

  // Обновление input value и Redux state
  useMemo(() => {
    if (event) {
      props.value = toRepresentation(event);
      product[field] = toInternalValue(event);
      dispatch(setProductAction({ ...product }));
    }
  }, [event]);

  function toInternalValue(event) {
    const target = event.target;
    switch (props.type) {
      case "file":
        return target.files[0];
      case "number":
        return Number(target.value);
      case "text":
      default:
        return target.value;
    }
  }

  function toRepresentation(event) {
    const value = event.target.value
    switch (props.type) {
      case "file":
        return undefined;
      case "number":
        return value.replace(/^0+(?=\d)/, "");
      case "text":
      default:
        return value;
    }
  }

  return <input {...props} onChange={(event) => setEvent(event)} />;
}
