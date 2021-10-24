import styled from "styled-components";
import { MOBILE_SIZE } from "../../../constants/styles";

export const ContainerBanner = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerBannerImage = styled.section`
  position: relative;
  max-height: 100%;
`;
