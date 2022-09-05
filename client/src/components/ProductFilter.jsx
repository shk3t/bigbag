import React, { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { POLY_BAG, BIG_BAG } from "../consts";

export default function ProductFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function ScrollToTopAfterFilter() {
    const { key } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [key]);

    return null;
  }

  ScrollToTopAfterFilter();

  const [categories, setCategories] = useState([
    { key: "all", name: "Все товары" },
    { key: POLY_BAG, name: "Мешки" },
    { key: BIG_BAG, name: "Биг-бэги" },
  ]);

  return (
    <div>
      <h4>Фильтры</h4>
      {categories.map((el) => (
        <button
          className="filter__categories"
          key={el.key}
          onClick={() => setSearchParams({ type: el.key })}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
}
