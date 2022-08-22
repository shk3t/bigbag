import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Filter() {
  const { products } = useSelector((state) => state.productListReducer);
  console.log(products);

  const { state, setState } = useState();

  // по идее, эта функция должна показать тип каждого из загруженных товаров
  // products.map((e) => console.log(e.type));

  return (
    <div>
      <div>
        <h4>Фильтры</h4>
        <h4>Категории</h4>
        <div>
          <input type="checkbox" id="meshki"></input>
          <label htmlFor="meshki">Мешки</label>
        </div>
        <div>
          <input type="checkbox" id="bb"></input>
          <label htmlFor="bb">Биг-бэги</label>
        </div>
      </div>
    </div>
  );
}
