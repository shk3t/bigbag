import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMsg from "../ErrorMsg";
import { setSubtypeAction } from "../../../reducers/subtypeReducer";
import {
  STATUS_INIT,
  requestAction,
} from "../../../reducers/modalRequestReducer";
import {
  createSubtypeAction,
  updateSubtypeAction,
} from "../../../reducers/subtypeListReducer";
import { ADMIN_REQUEST } from "../../../consts";
import { store } from "../../../store";

export default function BagTypeForm({type}) {
  const dispatch = useDispatch();
  const requestStatus = useSelector(
    (state) => state.adminRequestReducer.requestStatus
  );
  const errorMessages = useSelector(
    (state) => state.adminRequestReducer.errorMessages
  );
  const subtype = useSelector((state) => state.subtypeReducer.subtype);

  function sendRequest(event) {
    event.preventDefault();
    dispatch(
      requestAction(
        ADMIN_REQUEST,
        async () =>
          await store.dispatch(
            subtype.old_name
              ? updateSubtypeAction(type, subtype.old_name, subtype)
              : createSubtypeAction(type, subtype)
          )
      )
    );
  }

  return (
    <div>
      {errorMessages && <ErrorMsg messages={errorMessages} />}
      <form className="admin_add-meshki" encType="multipart/form-data">
        <div className="admin__add-description">
          Название типа мешка:
          <input
            value={subtype.name || ""}
            onChange={(event) =>
              dispatch(
                setSubtypeAction({ ...subtype, name: event.target.value })
              )
            }
          />
          <div className="button-save">
            <button
              disabled={requestStatus !== STATUS_INIT}
              onClick={sendRequest}
            >
              {"Сохранить"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
