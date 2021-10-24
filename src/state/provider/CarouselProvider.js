import React, { useState } from "react";
import CarouselContext from "../contexts/CarouselContext";

function CarouselProvider({ children, initialValues }) {
  const [listSlide] = useState(initialValues.listSlide);
  const [currentSlide, setCurrentSlide] = useState(initialValues.listSlide[0]);
  const [indexSlide, setIndexSlide] = useState(0);

  function nextSlide() {
    if (indexSlide === 0) {
      setIndexSlide(1);
      setCurrentSlide(listSlide[1]);
      return;
    }

    if (indexSlide >= 1 && indexSlide < listSlide.length - 1) {
      let index = indexSlide;
      index++;
      setIndexSlide(index);
      setCurrentSlide(listSlide[index]);
      return;
    }

    if (indexSlide === listSlide.length - 1) {
      setIndexSlide(0);
      setCurrentSlide(listSlide[0]);
      return;
    }
  }

  function backSlide() {
    if (indexSlide === 0) {
      let indexLasted = listSlide.length - 1;
      setIndexSlide(indexLasted);
      setCurrentSlide(listSlide[indexLasted]);
      return;
    }

    if (indexSlide >= 1 && indexSlide < listSlide.length) {
      let index = indexSlide;
      index--;
      setIndexSlide(index);
      setCurrentSlide(listSlide[index]);
      return;
    }
  }

  return (
    <CarouselContext.Provider
      value={{
        listSlide: listSlide,
        currentSlide: currentSlide,
        nextSlide,
        backSlide,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

export default CarouselProvider;
