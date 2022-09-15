import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { store } from "../../../store";
import { ADMIN_REQUEST, BASE_URL } from "../../../consts";
import { deleteProductAction } from "../../../reducers/productListReducer";
import { setModalAction } from "../../../reducers/modalRequestReducer";
import { setProductAction } from "../../../reducers/productReducer";
import { listSubtypesAction } from "../../../reducers/subtypeListReducer";

export default function BagTypeTable() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const subtypes = useSelector((state) => state.subtypeListReducer.subtypes);

  useEffect(() => {
    dispatch(listSubtypesAction(searchParams.get("table")));
  }, [searchParams]);

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
              dispatch(setProductAction(product));
              dispatch(setModalAction(ADMIN_REQUEST, true));
            }}
          >
            Редактировать
          </div>
          <div
            className="admin__edit"
            onClick={async () => {
              await store.dispatch(deleteProductAction(product.id));
            }}
          >
            Удалить
          </div>
        </div>
      ))}
    </div>
  );
}
