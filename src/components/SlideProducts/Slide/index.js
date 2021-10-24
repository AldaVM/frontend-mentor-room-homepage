import React, { useContext } from "react";
import CarouselContext from "../../../state/contexts/CarouselContext";
import Banner from "../Banner";
import { ContainerSlide } from "./styled";

function Slide() {
  const { currentSlide } = useContext(CarouselContext);

  return (
    <ContainerSlide>
      <Banner slide={currentSlide} />
    </ContainerSlide>
  );
}

export default Slide;
