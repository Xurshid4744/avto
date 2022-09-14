import React from "react";
import { Route, Routes } from "react-router-dom";
import { routesAdmin } from "../../../routes";
import AdminLayout from "../../Layout/Admin/Admin";

const AdminRouter = () => {
  return (
    <>
      <AdminLayout>
        <Routes>
          {routesAdmin.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </AdminLayout>
    </>
  );
};

export default AdminRouter;
