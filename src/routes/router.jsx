import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "../layouts/Main/Main";


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