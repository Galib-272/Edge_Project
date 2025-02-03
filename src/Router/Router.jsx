import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import Menu from "../Pages/Menu/Menu";
import ToDoPage from "../Pages/ToDoPage/ToDoPage";

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path:"/",
            element: <HomePage></HomePage>
        },
        {
            path: "/about",
            element: <AboutPage></AboutPage>
        },
        {
          path: "/menu",
          element: <Menu></Menu>
      },
      {
        path: "/todopage",
        element: <ToDoPage></ToDoPage>
    }
    ]
    
  },
]);
export default router;