import {createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Form from "../Form/Form";
import StateFullForm from "../StateFull/StateFullForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Form />,
      },
      {
        path: "/state",
        element: <StateFullForm />,
      },
    ],
  },
]);
