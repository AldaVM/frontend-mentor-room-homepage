import styled from "styled-components";
import {
  COLOR_BLACK,
  COLOR_PRIMARY_DARK_GRAY,
} from "../../../constants/styles";

export const ContainerDescription = styled.article`
  padding: 9rem 5rem 0 5rem;
  position: relative;
`;

export const TitleBanner = styled.h2`
  font-size: 2.3rem;
  font-weight: 600;
  color: ${COLOR_BLACK};
  margin-bottom: 2rem;
`;

export const ParagraphBanner = styled.p`
  font-size: 12px;
  line-height: 1.5;
  font-weight: 500;
  color: ${COLOR_PRIMARY_DARK_GRAY};
  margin-bottom: 2rem;
`;
