import Cars from "./pages/Cars/Cars"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Models from "./pages/Models/Models"
import ModelsAbout from "./pages/ModelsAbout/ModelsAbout"
import ModelsAll from "./pages/ModelsAll/ModelsAll"


export const routes = [
    {path: `/`, element: <Home/>},
    {path: `/models`, element: <Models/>},
    {path: `/models/:id`, element: <ModelsAll/>},
    {path: `/models/:id/:id`, element: <ModelsAbout/>},
]

export const routesAdmin = [
    {path: '/', element: <Cars/>},
    {path: '/login', element: <Login/>}
]
