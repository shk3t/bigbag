import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRequestAction } from "../../../reducers/callRequestReducer";

export default function CallRequestInput({ field, ...props }) {
  const dispatch = useDispatch();
  const { request } = useSelector((state) => state.callRequestReducer);
  const [value, setValue] = useState("");

  useMemo(() => {
    setValue(request[field]);
  }, []);

  switch (props.type) {
    case "textarea":
      return (
        <textarea
          {...props}
          value={request[field]}
          onChange={(event) => {
            request[field] = event.target.value;
            dispatch(setRequestAction({ ...request }));
          }}
        ></textarea>
      );
    case "number":
      return (
        <input
          {...props}
          value={value}
          onChange={(event) => {
            const value = event.target.value;
            setValue(value.replace(/^0+(?=\d)/, ""));
            request[field] = Number(value);
            dispatch(setRequestAction({ ...request }));
          }}
        />
      );
    case "text":
    case "tel":
    default:
      return (
        <input
          {...props}
          value={request[field]}
          onChange={(event) => {
            request[field] = event.target.value;
            dispatch(setRequestAction({ ...request }));
          }}
        />
      );
  }
}
