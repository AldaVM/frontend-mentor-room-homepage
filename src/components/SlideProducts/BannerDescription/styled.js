import styled from "styled-components";
import {
  COLOR_BLACK,
  COLOR_PRIMARY_DARK_GRAY,
  MOBILE_SIZE,
} from "../../../constants/styles";

export const ContainerDescription = styled.article`
  display: block;
  padding: 9rem 5rem 0 5rem;
  position: relative;

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    padding: 5rem 2rem 5rem 2rem;
  }
`;

export const TitleBanner = styled.h2`
  font-size: 2.3rem;
  font-weight: 600;
  color: ${COLOR_BLACK};
  margin-bottom: 2rem;

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    font-size: 1.5rem;
  }
`;

export const ParagraphBanner = styled.p`
  font-size: 12px;
  line-height: 1.5;
  font-weight: 500;
  color: ${COLOR_PRIMARY_DARK_GRAY};
  margin-bottom: 2rem;
`;
