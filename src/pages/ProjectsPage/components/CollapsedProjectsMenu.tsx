import styled from "styled-components";
import { ProjectsMenuHeader } from "./ProjectsMenuHeader";
import { menuBorderColor, menuColor, menuOutlineColor } from "@/utils/colors";

export const CollapsedProjectsMenu = ({
  toggleIsMenuCollapsed,
}: {
  toggleIsMenuCollapsed: () => void;
}) => {
  return (
    <CollapsedProjectsMenuContainer>
      <ProjectsMenuHeader toggleIsMenuCollapsed={toggleIsMenuCollapsed} />
    </CollapsedProjectsMenuContainer>
  );
};

const CollapsedProjectsMenuContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 4.5rem;
  padding-bottom: 1.5rem;

  background-color: ${menuColor};
  width: 26rem;
  border-radius: 0.5rem 0.5rem 0 0;
  border: 1px solid ${menuBorderColor};
  outline: 1px solid ${menuOutlineColor};
  z-index: 1;
`;
