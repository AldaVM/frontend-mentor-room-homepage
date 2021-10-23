import styled from "styled-components";
import {
  COLOR_BLACK,
  COLOR_PRIMARY_DARK_GRAY,
} from "../../../constants/styles";

export const ContentButton = styled.div`
  color: ${COLOR_BLACK};
  cursor: pointer;

  & span svg path {
    transition: fill 0.3s ease-out;
  }

  :hover span {
    color: ${COLOR_PRIMARY_DARK_GRAY};
  }

  :hover span svg path {
    fill: ${COLOR_PRIMARY_DARK_GRAY};
  }
`;

export const LabelButton = styled.span`
  display: inline-block;
  margin-right: 2rem;
  font-size: 0.8rem;
  letter-spacing: 7px;
  color: ${COLOR_BLACK};
  cursor: pointer;
  transition: color 0.3s ease-out;
`;
