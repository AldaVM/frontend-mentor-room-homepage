import React from "react";
import { ContainerImage } from "./styled";

function ResponsiveImage({
  descriptionImage,
  sourceImage,
  maxWidth = "100%",
  responsiveImage = "",
}) {
  return (
    <ContainerImage maxWidth={maxWidth}>
      <img
        srcSet={`${
          responsiveImage ? responsiveImage : sourceImage
        } 375w, ${sourceImage} 800w`}
        src={sourceImage}
        alt={descriptionImage}
      />
    </ContainerImage>
  );
}

export default ResponsiveImage;
