import React from "react";
import Header from "../components/Header";
import BtnAddItem from "../components/UI/Buttons/BtnAddItem";
import AdminTables from "../components/AdminTables";
import AdminTableSelect from "../components/UI/Selects/AdminTableSelect";

export default function AdminPage() {
  // const { product } = useSelector((state) => state.productReducer);

  return (
    <div>
      <Header />
      <main className="admin-main">
        <AdminTableSelect />
        <AdminTables />
        <BtnAddItem />
      </main>
      {/* весь admin-container сделать модальным, появляется когда клик Добавить */}

      {/* <div className="admin__container">
        <h1>Добавить товар</h1>
        {renderTable()}
      </div>
       */}
    </div>
  );
}
