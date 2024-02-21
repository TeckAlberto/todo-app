import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: '/my-day',
        element: <div>Todo-App</div>,
      },
      {
        path: '/important',
        element: <div>Important</div>
      }, 
      {
        path: '/planned',
        element: <div>Planned</div>
      }
    ],
  },
  {
    path: "/admin",
    element: <div>Layout-admin</div>,
    children: [
      {
        path: "/admin/register",
        element: <div>Register</div>,
      },
      {
        path: "/admin/login",
        element: <div>Login</div>,
      },
    ],
  },
]);


export default router;