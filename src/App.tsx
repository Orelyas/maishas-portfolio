import { router } from "@/utils/router";
import { RouterProvider } from "react-router/dom";

export const App = () => {
  return <RouterProvider router={router} />;
};
