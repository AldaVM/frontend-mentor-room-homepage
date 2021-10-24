import styled from "styled-components";
import { MOBILE_SIZE } from "../../../constants/styles";

export const ContainerBtnMenu = styled.div`
  display: none;
  cursor: pointer;

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    display: block;
  }
`;
