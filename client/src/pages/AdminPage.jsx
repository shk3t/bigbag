import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function AdminPage() {
  const [select, setSelect] = useState();
  const [className, setClassName] = useState();

  function handleSelectValue(e) {
    setSelect(e.target.value);
  }

  return (
    <div>
      <div className="admin__container">
        <h1>Добавить товар</h1>

        {/* выбор категории ниже влияет на то, какой div будет загружаться */}
        <div className=" admin__choose">
          Выберите категорию:
          <select value={select} onChange={handleSelectValue}>
            <option value="m">Мешки</option>
            <option value="bb">Биг-бэги</option>
          </select>
        </div>

        {/* div, если категория мешки */}

        <div className="admin_add-meshki">
          <h2>Добавить мешок</h2>

          <div className="admin__add-description">
            Добавить характеристики
            <input type="text" placeholder="Введите цвет" />
            <select>
              <option>Высший</option>
              <option>Первый</option>
              <option>Второй</option>
              <option>Не указано</option>
            </select>
            <input type="number" placeholder="Вес, напр. 46" />
            <input type="number" placeholder="Шт/уп " />
          </div>
          <div>
            Выберите изображение:
            <form enctype="multipart/form-data" method="post">
              <input type="file" />
              <input type="submit" value="Загрузить"></input>
            </form>
          </div>
        </div>

        {/* div, если категория Биг-бэги */}
        <div className="admin__add-bb">
          <h2>Добавить биг-бэг</h2>
          <div className="admin__add-description">
            <input type="text" placeholder="Введите тип верха" />
            <input type="text" placeholder="Введите тип низа" />
          </div>
          <div>
            Выберите изображение:
            <form enctype="multipart/form-data" method="post">
              <input type="file" />
              <input type="submit" value="Загрузить"></input>
            </form>
          </div>
        </div>
        <input type="submit" value="Добавить товар"></input>
      </div>
    </div>
  );
}
