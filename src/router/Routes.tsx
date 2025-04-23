import { createBrowserRouter } from "react-router-dom";
import PreAuthLayout from "@/layout/preAuthLayout/PreAuthLayout";
import Todolist from "@/page/todolist/Todolist";
import Field from "@/page/field/Field";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PreAuthLayout />,
    children: [
      // {
      //   path: "/testing",
      //   element: <Field/>,
      // },
      {
        path: "/",
        element: <Todolist />,
      },
    ],
  },
]);

export default router;
