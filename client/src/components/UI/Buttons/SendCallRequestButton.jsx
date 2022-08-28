import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendRequestAction } from "../../../reducers/callRequestReducer";

export default function SendCallRequestButton() {
  const dispatch = useDispatch();
  const { request } = useSelector(state => state.callRequestReducer)

  function sendRequest(event) {
    event.preventDefault();
    dispatch(sendRequestAction(request));
  }

  return <button onClick={sendRequest}>Жду звонка!</button>;
}
