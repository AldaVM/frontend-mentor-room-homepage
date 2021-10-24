import styled from "styled-components";
import {
  COLOR_WHITE,
  DESKTOP_SIZE,
  MOBILE_SIZE,
} from "../../../constants/styles";

export const ContainerPage = styled.div`
  max-width: ${DESKTOP_SIZE};
  width: 100%;
  margin: 0 auto;
  background-color: ${COLOR_WHITE};

  @media screen and(max_width: ${MOBILE_SIZE}) {
    max-width: ${MOBILE_SIZE};
  }
`;
