import { projectsPagePath } from "@/utils/router";
import type { Portfolio } from "@/utils/types";
import { Link, useOutletContext } from "react-router";

export const HomePage = () => {
  const portfolio: Portfolio = useOutletContext();

  return (
    <>
      <div>{portfolio.name}</div>

      <Link to={projectsPagePath}>Projects</Link>
    </>
  );
};
