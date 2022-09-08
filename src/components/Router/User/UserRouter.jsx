import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../../routes";
import UserLayout from "../../Layout/User/User";

const UserRouter = () => {
  return (
    <UserLayout>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </UserLayout>
  );
};

export default UserRouter;
