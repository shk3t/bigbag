import React from "react";
import BtnAdminNew from "../components/UI/Buttons/BtnAdminNew";
import AdminTables from "../components/UI/Tables/AdminTables";
import AdminTableSelect from "../components/UI/Selects/AdminTableSelect";

export default function AdminPage() {
  return (
    <div>
      <main className="admin-main">
        <BtnAdminNew />
        <AdminTableSelect />
        <div className="admin__tables">
          <AdminTables />
        </div>
      </main>
    </div>
  );
}
