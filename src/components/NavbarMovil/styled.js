import styled from "styled-components";
import { COLOR_BLACK, COLOR_WHITE } from "../../constants/styles";

export const ContainerMovilMenu = styled.section`
  position: fixed;
  left: ${(props) => (props.isOpenMenu ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 30;
`;

export const ContainerMovilNav = styled.div`
  width: 100%;
  background-color: ${COLOR_WHITE};
  color: #000;
  padding: 2rem;
  display: flex;

  nav {
    padding-left: 3rem;
  }

  span {
    display: inline-block;
    padding-right: 1rem;
    color: ${COLOR_BLACK};
    font-size: 13px;
    font-weight: 600;
  }
`;
