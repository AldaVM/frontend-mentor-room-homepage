import React from "react";
import { SLIDES_TEST } from "../../constants/templates";
import "../../reset.css";
import CarouselProvider from "../../state/provider/CarouselProvider";
import Home from "../pages/Home";

function App() {
  return (
    <CarouselProvider initialValues={{ listSlide: SLIDES_TEST }}>
      <Home />
    </CarouselProvider>
  );
}

export default App;
