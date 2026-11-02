import { Layout } from "@/components";
import { HomePage, ProjectsPage } from "@/pages";
import { createBrowserRouter, redirect } from "react-router";

export const homePagePath = "/";
export const projectsPagePath = "projects";

export const router = createBrowserRouter([
  {
    path: homePagePath,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: projectsPagePath, element: <ProjectsPage /> },
      { path: "*", loader: () => redirect(homePagePath) },
    ],
  },
]);
