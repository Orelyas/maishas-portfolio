import { homePagePath } from "@/utils/router";
import { Link } from "react-router";

export const ProjectsPage = () => {
  return (
    <>
      <div>Projects</div>

      <Link to={homePagePath}>Home</Link>
    </>
  );
};
