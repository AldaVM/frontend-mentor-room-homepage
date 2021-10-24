import React from "react";
import { ABOUT_PRODUCT } from "../../constants/templates";
import AboutProduct from "../AboutProduct";
import Slide from "../SlideProducts/Slide";
import { ContainerMain } from "./styled";

function Main() {
  return (
    <ContainerMain>
      <Slide />
      <AboutProduct {...ABOUT_PRODUCT} />
    </ContainerMain>
  );
}

export default Main;
