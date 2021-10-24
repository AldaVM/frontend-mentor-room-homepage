import styled from "styled-components";
import {
  COLOR_BLACK,
  COLOR_PRIMARY_DARK_GRAY,
  MOBILE_SIZE,
} from "../../constants/styles";

export const GridAboutProducts = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 40% 30%;

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    display: flex;
    flex-direction: column;
  }
`;

export const ArticleAboutProduct = styled.article`
  padding: 5rem 2rem;

  h3 {
    padding-bottom: 1rem;
    color: ${COLOR_BLACK};
    font-weight: 700;
    letter-spacing: 5px;
    font-size: 0.8rem;

    @media only screen and (max-width: ${MOBILE_SIZE}) {
      font-size: 12px;
    }
  }

  p {
    font-size: 12px;
    line-height: 1.5;
    font-weight: 500;
    color: ${COLOR_PRIMARY_DARK_GRAY};
  }
`;
