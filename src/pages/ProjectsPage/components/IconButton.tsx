import {
  activeDarkerColor,
  arrowColor,
  eventColor,
  focusDarkerColor,
  hoverDarkerColor,
} from "@/utils/colors";
import { type MouseEvent } from "react";
import styled from "styled-components";

export const IconButton = ({
  className,
  iconPath,
  onClick,
}: {
  className?: string;
  iconPath: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  const onIconButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.detail !== 0) {
      event.currentTarget.blur();
    }

    onClick(event);
  };

  return (
    <IconButtonStateLayer className={className} onClick={onIconButtonClick}>
      <Icon viewBox="0 0 24 24">
        <path d={iconPath} />
      </Icon>
    </IconButtonStateLayer>
  );
};

const iconButtonSize = "6.75rem";
const iconSize = "3.5rem";

const IconButtonStateLayer = styled.button`
  all: unset;

  height: ${iconButtonSize};
  width: ${iconButtonSize};

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: ${iconButtonSize};

  cursor: pointer;

  transition: background-color 250ms;

  background-color: ${`${eventColor}1A`};

  &:hover {
    background-color: ${hoverDarkerColor};
  }

  &:focus {
    background-color: ${focusDarkerColor};

    outline: 3px solid ${arrowColor};
    outline-offset: 1px;
  }

  &:active {
    background-color: ${activeDarkerColor};
    outline: unset;
  }
`;

const Icon = styled.svg`
  fill: ${arrowColor};
  height: ${iconSize};
  width: ${iconSize};
`;
