import React from "react";
import ResponsiveImage from "../../ResponsiveImage";
import BannerDescription from "../BannerDescription";
import ControlsSlide from "../../Buttons/ControlsSlide";
import { ContainerBanner, ContainerBannerImage } from "./styled";

function Banner({ slide }) {
  return (
    <ContainerBanner>
      <ContainerBannerImage>
        <ResponsiveImage {...slide} />
        <ControlsSlide />
      </ContainerBannerImage>
      <BannerDescription {...slide} />
    </ContainerBanner>
  );
}

export default Banner;
