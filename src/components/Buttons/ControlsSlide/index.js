import React, { useContext } from "react";
import CarouselContext from "../../../state/contexts/CarouselContext";
import SVGIconSlideLeft from "../../../svg/icon-angle-left.svg";
import SVGIconSlideRight from "../../../svg/icon-angle-right.svg";
import { ContainerSlide, ContainerControls, ContainerAbsolute } from "./styled";

function BtnSlide({ sourceImage, descriptionImage, handleClick }) {
  return (
    <ContainerSlide onClick={handleClick}>
      <img src={sourceImage} alt={descriptionImage} />
    </ContainerSlide>
  );
}

function ControlsSlide() {
  const { nextSlide, backSlide } = useContext(CarouselContext);

  return (
    <ContainerAbsolute>
      <ContainerControls>
        <BtnSlide
          sourceImage={SVGIconSlideLeft}
          descriptionImage="icon-angle-left"
          handleClick={backSlide}
        />
        <BtnSlide
          sourceImage={SVGIconSlideRight}
          descriptionImage="icon-angle-right"
          handleClick={nextSlide}
        />
      </ContainerControls>
    </ContainerAbsolute>
  );
}

export default ControlsSlide;
