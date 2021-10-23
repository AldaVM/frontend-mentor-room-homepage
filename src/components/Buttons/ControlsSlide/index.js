import React from "react";
import SVGIconSlideLeft from "../../../svg/icon-angle-left.svg";
import SVGIconSlideRight from "../../../svg/icon-angle-right.svg";
import { ContainerSlide, ContainerControls, ContainerAbsolute } from "./styled";

function BtnSlide({ sourceImage, descriptionImage }) {
  return (
    <ContainerSlide>
      <img src={sourceImage} alt={descriptionImage} />
    </ContainerSlide>
  );
}

function ControlsSlide() {
  return (
    <ContainerAbsolute>
      <ContainerControls>
        <BtnSlide
          sourceImage={SVGIconSlideLeft}
          descriptionImage="icon-angle-left"
        />
        <BtnSlide
          sourceImage={SVGIconSlideRight}
          descriptionImage="icon-angle-right"
        />
      </ContainerControls>
    </ContainerAbsolute>
  );
}

export default ControlsSlide;
