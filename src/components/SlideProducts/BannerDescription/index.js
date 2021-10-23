import React from "react";
import ButtonShop from "../../Buttons/ButtonShop";
import { ContainerDescription, TitleBanner, ParagraphBanner } from "./styled";

function BannerDescription({ title, description }) {
  return (
    <section>
      <ContainerDescription>
        <TitleBanner>{title}</TitleBanner>
        <ParagraphBanner>{description}</ParagraphBanner>
        <ButtonShop />
      </ContainerDescription>
    </section>
  );
}

export default BannerDescription;
