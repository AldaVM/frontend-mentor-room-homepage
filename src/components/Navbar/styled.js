import styled from "styled-components";
import { COLOR_WHITE } from "../../constants/styles";

export const ContainerNavbar = styled.nav`
  width: 100%;
  padding-left: 3rem;
  display: flex;
`;

export const ItemMenu = styled.span`
  color: ${COLOR_WHITE};
  font-weight: 600;
  padding-right: 2rem;
  padding-bottom: 0.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &::after {
    content: "";
    opacity: 0;
    position: absolute;
    bottom: 0;
    width: 13px;
    height: 2px;
    background-color: ${COLOR_WHITE};
  }

  :hover {
    &::after {
      opacity: 1;
    }
  }
`;
