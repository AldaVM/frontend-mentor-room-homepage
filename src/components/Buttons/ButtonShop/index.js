import React from "react";
import ArrowSVG from "../../SVGCompoents/ArrowSVG";
import { LabelButton, ContentButton } from "./styled";

function ButtonShop() {
  return (
    <ContentButton>
      <LabelButton>SHOP NOW</LabelButton>
      <ArrowSVG />
    </ContentButton>
  );
}

export default ButtonShop;
