import { eventColor, menuHeaderFontColor } from "@/utils/colors";
import { toggleIconPath } from "@/utils/icons";
import { homePagePath } from "@/utils/router";
import type { Portfolio } from "@/utils/types";
import { Link, useOutletContext } from "react-router";
import styled from "styled-components";

export const ProjectsMenuHeader = ({
  toggleIsMenuCollapsed,
}: {
  toggleIsMenuCollapsed: () => void;
}) => {
  const portfolio: Portfolio = useOutletContext();

  return (
    <ProjectsMenuHeaderContainer>
      <ProjectsMenuHeaderLink to={homePagePath}>
        <PortfolioTitle>
          {portfolio.name ? portfolio.name : "Portfolio"}
        </PortfolioTitle>
      </ProjectsMenuHeaderLink>

      <ProjectsMenuToggleButton onClick={toggleIsMenuCollapsed}>
        <ToggleIcon viewBox="0 0 24 24">
          <path d={toggleIconPath} />
        </ToggleIcon>
      </ProjectsMenuToggleButton>
    </ProjectsMenuHeaderContainer>
  );
};

const ProjectsMenuHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2.5rem 0 2.5rem;
`;

const PortfolioTitle = styled.h1`
  all: unset;

  font-weight: bold;
  color: ${menuHeaderFontColor};
  font-size: 1.5rem;
`;

const ProjectsMenuHeaderLink = styled(Link)`
  all: unset;

  cursor: pointer;

  &:hover ${PortfolioTitle} {
    color: ${eventColor};
  }
`;

const ProjectsMenuToggleButton = styled.button`
  all: unset;

  cursor: pointer;
  fill: ${menuHeaderFontColor};

  &:hover {
    fill: ${eventColor};
  }
`;

const ToggleIcon = styled.svg`
  height: 24px;
  width: 24px;
`;
