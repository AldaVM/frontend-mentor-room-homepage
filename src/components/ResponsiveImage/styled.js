import styled from "styled-components";

export const ContainerImage = styled.div`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "0")};
  width: 100%;

  img {
    width: 100%;
    vertical-align: top;
  }
`;
