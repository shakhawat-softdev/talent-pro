import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main/Main";
import Home from "../pages/home/Home/Home";


const router = createBrowserRouter([
   {
      path: '/',
      element: <Main />,
      children: [
         {
            path: '/',
            element: <Home />,
            loader: () => fetch('https://talent-pro-server.vercel.app/services')
         }
      ]
   }
])

export default router;