import Cars from "./pages/Cars/Cars";
import Models from "./pages/Models/Models";
import ModelsAbout from "./pages/ModelsAbout/ModelsAbout";
import ModelsAll from "./pages/ModelsAll/ModelsAll";

export const routes = [
  { path: `/`, element: <Models /> },
  { path: `/models/:id`, element: <ModelsAll /> },
  { path: `/models/:id/:id`, element: <ModelsAbout /> },
];
export const routesAdmin = [{ path: "/", element: <Cars /> }];
