import {
  activeDarkerColor,
  focusDarkerColor,
  hoverDarkerColor,
  menuBorderColor,
  menuColor,
  menuOutlineColor,
  projectTypeFontColor,
} from "@/utils/colors";
import { descriptionFontFamily } from "@/utils/fonts";
import type { Portfolio, Project } from "@/utils/types";
import { type MouseEvent } from "react";
import { useOutletContext } from "react-router";
import styled, { css } from "styled-components";
import { ProjectsMenuHeader } from "./ProjectsMenuHeader";

export const ProjectsMenu = ({
  selectedProjectIndex,
  selectProject,
  toggleIsMenuCollapsed,
}: {
  selectedProjectIndex: number;
  selectProject: (index: number) => void;
  toggleIsMenuCollapsed: () => void;
}) => {
  const portfolio: Portfolio = useOutletContext();

  const onProjectClick = (event: MouseEvent<HTMLLIElement>, index: number) => {
    if (event.detail !== 0) {
      event.currentTarget.blur();
    }

    selectProject(index);
  };

  const isProjectSelected = (index: number) => {
    return index === selectedProjectIndex;
  };

  const projectTitle = (project: Project, index: number) => {
    return `${isProjectSelected(index) ? "· " : ""}${project.name}${project.date ? ` (${project.date})` : ""}`;
  };

  return (
    <ProjectsMenuContainer>
      <ProjectsMenuHeader toggleIsMenuCollapsed={toggleIsMenuCollapsed} />

      <Divider $isPadded={true} />

      <ScrollableArea>
        <ProjectsList>
          {portfolio.projects.map((project, index) => (
            <div key={index}>
              <Project
                $isSelected={isProjectSelected(index)}
                tabIndex={isProjectSelected(index) ? 1 : 0}
                onClick={(event) => onProjectClick(event, index)}
              >
                <ProjectTitle>{projectTitle(project, index)}</ProjectTitle>

                {project.type && (
                  <ProjectSubtitle>{project.type}</ProjectSubtitle>
                )}

                {isProjectSelected(index) && project.description && (
                  <ProjectDescription>{project.description}</ProjectDescription>
                )}
              </Project>

              <Divider />
            </div>
          ))}
        </ProjectsList>
      </ScrollableArea>
    </ProjectsMenuContainer>
  );
};

const ProjectsList = styled.div`
  all: unset;

  display: block;
  padding: 0 2.5rem 2rem 2.5rem;
`;

const ProjectsMenuContainer = styled.nav`
  background-color: ${menuColor};
  height: calc(100vh - 3.5rem);
  width: 26rem;
  border-radius: 0.5rem;
  border: 1px solid ${menuBorderColor};
  outline: 1px solid ${menuOutlineColor};
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div<{ $isPadded?: true }>`
  margin: 0.875rem 0 1.25rem 0;
  height: 1px;
  background-color: ${menuBorderColor};

  ${(props) =>
    props.$isPadded
      ? css`
          width: calc(100% - 5rem);
          margin-left: 2.5rem;
        `
      : css`
          width: 100%;
        `}
`;

const ScrollableArea = styled.div`
  overflow: auto;
`;

const Project = styled.li<{ $isSelected: boolean }>`
  all: unset;
  display: block;

  transition: all 250ms;

  border-radius: 3px;

  ${(props) =>
    !props.$isSelected &&
    css`
      cursor: pointer;

      &:hover {
        background-color: ${hoverDarkerColor};
      }

      &:focus {
        background-color: ${focusDarkerColor};

        transition: all 0s;
        outline: 3px solid ${menuBorderColor};
        outline-offset: 1px;
      }

      &:active {
        background-color: ${activeDarkerColor};
        outline: unset;
      }
    `}
`;

const ProjectTitle = styled.h2`
  all: unset;

  font-size: 1.25rem;
`;

const ProjectSubtitle = styled.div`
  color: ${projectTypeFontColor};
`;

const ProjectDescription = styled.div`
  font-family: ${descriptionFontFamily};

  margin-top: 1.5rem;
`;
