import React from "react";
import AdminModal from "../components/Modal/AdminModal";
import BtnNewProduct from "../components/UI/Buttons/BtnNewProduct";
import AdminTables from "../components/UI/Tables/AdminTables";
import AdminTableSelect from "../components/UI/Selects/AdminTableSelect";

export default function AdminPage() {
  return (
    <div>
      <main className="admin-main">
        <BtnNewProduct />
        <AdminTableSelect />
        <div className="admin__tables">
          <AdminTables />
        </div>
        <AdminModal />
      </main>
    </div>
  );
}
