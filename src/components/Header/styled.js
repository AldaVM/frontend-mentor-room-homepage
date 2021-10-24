import styled from "styled-components";
import { MOBILE_SIZE } from "../../constants/styles";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 3rem;
  display: flex;
  position: absolute;
  z-index: 20;
  top: 0;

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    padding: 2rem;
    display: grid;
    grid-template-columns: 40% 20% 40%;
  }
`;
