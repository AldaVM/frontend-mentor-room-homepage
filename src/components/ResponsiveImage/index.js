import React from "react";
import { ContainerImage } from "./styled";

function ResponsiveImage({ descriptionImage, sourceImage, maxWidth = "100%" }) {
  return (
    <ContainerImage maxWidth={maxWidth}>
      <img src={sourceImage} alt={descriptionImage} />
    </ContainerImage>
  );
}

export default ResponsiveImage;
