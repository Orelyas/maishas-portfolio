import { leftArrowIconPath, rightArrowIconPath } from "@/utils/icons";
import type { Portfolio } from "@/utils/types";
import { useState } from "react";
import { useOutletContext } from "react-router";
import styled, { css } from "styled-components";
import { IconButton, ProjectsMenu } from "./components";
import { CollapsedProjectsMenu } from "./components/CollapsedProjectsMenu";

export const ProjectsPage = () => {
  const portfolio: Portfolio = useOutletContext();

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const selectedProject = portfolio.projects[selectedProjectIndex];

  const [selectedAssetIndex, setSelectedAssetIndex] = useState(0);
  const selectedAsset = selectedProject?.assets?.[selectedAssetIndex];

  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

  const selectNextAsset = () => {
    setSelectedAssetIndex(selectedAssetIndex + 1);
  };

  const selectPreviousAsset = () => {
    setSelectedAssetIndex(selectedAssetIndex - 1);
  };

  const selectProject = (index: number) => {
    setSelectedAssetIndex(0);
    setSelectedProjectIndex(index);
  };

  const toggleIsMenuCollapsed = () => {
    setIsMenuCollapsed(!isMenuCollapsed);
  };

  return (
    <>
      <BackgroundCover src={selectedAsset} />

      <Asset src={selectedAsset} />

      {isMenuCollapsed && (
        <CollapsedProjectsMenu toggleIsMenuCollapsed={toggleIsMenuCollapsed} />
      )}

      <ProjectsPageContainer>
        <LeftSideContainer>
          {!isMenuCollapsed && (
            <ProjectsMenu
              selectedProjectIndex={selectedProjectIndex}
              selectProject={selectProject}
              toggleIsMenuCollapsed={toggleIsMenuCollapsed}
            />
          )}

          {selectedAssetIndex !== 0 && (
            <PreviousAssetButton
              iconPath={leftArrowIconPath}
              onClick={selectPreviousAsset}
            />
          )}
        </LeftSideContainer>

        {selectedAssetIndex + 1 !== selectedProject?.assets?.length && (
          <IconButton iconPath={rightArrowIconPath} onClick={selectNextAsset} />
        )}
      </ProjectsPageContainer>
    </>
  );
};

const wholeScreenStyle = css`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
`;

const ProjectsPageContainer = styled.div`
  ${wholeScreenStyle}

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 4.5rem;
`;

const BackgroundCover = styled.img`
  ${wholeScreenStyle}

  filter: brightness(0.25);
  object-fit: cover;
`;

const Asset = styled.img`
  ${wholeScreenStyle}

  object-fit: contain;
`;

const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PreviousAssetButton = styled(IconButton)`
  margin-left: 1rem;
`;
