import React from "react";
import { SLIDES_TEST } from "../../constants/templates";
import "../../reset.css";
import CarouselProvider from "../../state/provider/CarouselProvider";
import MenuProvider from "../../state/provider/MenuProvider";
import Home from "../pages/Home";

function App() {
  return (
    <MenuProvider>
      <CarouselProvider initialValues={{ listSlide: SLIDES_TEST }}>
        <Home />
      </CarouselProvider>
    </MenuProvider>
  );
}

export default App;
