import React, { useState } from "react";
import { POLY_BAG, BIG_BAG } from "../consts";

export default function ProductFilter({ setSearchParams }) {
  // console.log(products);
  // products.map((e) => console.log(e.type));
  const [categories, setCategories] = useState([
    { key: "all", name: "Все товары" },
    { key: POLY_BAG, name: "Мешки" },
    { key: BIG_BAG, name: "Биг-бэги" },
  ]);

  return (
    <div>
      <h4>Фильтры</h4>
      {categories.map((el) => (
        // вариант с флажками
        // <div key={el.key}>
        //   <input
        //     type="checkbox"
        //     id={el.key}
        //     onChange={() => props.returnACategory(el.key)}
        //   ></input>
        //   <label htmlFor={el.key}>{el.name}</label>
        // </div>

        <button
          className="filter__categories"
          key={el.key}
          onClick={() => setSearchParams({type: el.key})}
        >
          {el.name}
        </button>
      ))}
    </div>
  );

  // отрисовывается просто
  // return (
  //   <div>
  //     <div>
  //       <h4>Фильтры</h4>
  //       <h4>Категории</h4>
  //       <div>
  //         <input type="checkbox" id="meshki"></input>
  //         <label htmlFor="meshki">Мешки</label>
  //       </div>
  //       <div>
  //         <input type="checkbox" id="bb"></input>
  //         <label htmlFor="bb">Биг-бэги</label>
  //       </div>
  //     </div>
  //   </div>
  // );
}
