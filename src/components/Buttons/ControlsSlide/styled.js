import styled from "styled-components";
import {
  COLOR_BLACK,
  COLOR_VERY_DARK_GRAY,
  MOBILE_SIZE,
} from "../../../constants/styles";

export const ContainerAbsolute = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ContainerControls = styled.div`
  display: flex;
  position: relative;
  right: -156px;

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    right: 0;
  }
`;

export const ContainerSlide = styled.div`
  background-color: ${COLOR_BLACK};
  padding: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease-out;

  :hover {
    background-color: ${COLOR_VERY_DARK_GRAY};
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    padding: 1rem;
  }
`;
