import React from "react";
import ResponsiveImage from "../../ResponsiveImage";
import BannerDescription from "../BannerDescription";
import ControlsSlide from "../../Buttons/ControlsSlide";
import { ContainerBanner, ContainerBannerImage } from "./styled";

const slide = {
  sourceImage: "images/desktop-image-hero-1.jpg",
  descriptionImage: "desk colour white with chair",
  title: "Discover innovative ways to decorate",
  description:
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
};

function Banner() {
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
