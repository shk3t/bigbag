import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../store";
import { ADMIN_REQUEST, BASE_URL } from "../../../consts";
import { setModalAction } from "../../../reducers/modalRequestReducer";
import { setSubtypeAction } from "../../../reducers/subtypeReducer";
import { deleteSubtypeAction } from "../../../reducers/subtypeListReducer";

export default function BagTypeTable({type}) {
  const dispatch = useDispatch();
  const subtypes = useSelector((state) => state.subtypeListReducer.subtypes);

  return (
    <div>
      <div className="all-products__title">
        <div>Тип мешка</div>
        <div></div>
        <div></div>
      </div>
      {subtypes.map((subtype) => (
        <div className="all-products__title" key={subtype.name}>
          <div>{subtype.name}</div>
          <div
            className="admin__edit"
            onClick={() => {
              dispatch(setSubtypeAction({ ...subtype, old_name: subtype.name }));
              dispatch(setModalAction(ADMIN_REQUEST, true));
            }}
          >
            Редактировать
          </div>
          <div
            className="admin__edit"
            onClick={async () => {
              await store.dispatch(deleteSubtypeAction(type, subtype.name));
            }}
          >
            Удалить
          </div>
        </div>
      ))}
    </div>
  );
}
