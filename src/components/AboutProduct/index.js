import React from "react";
import ResponsiveImage from "../ResponsiveImage";
import { GridAboutProducts, ArticleAboutProduct } from "./styled";

function AboutProduct({ title, description, darkImage, lightImage }) {
  return (
    <GridAboutProducts>
      <ResponsiveImage {...darkImage} />
      <ArticleAboutProduct>
        <h3>{title}</h3>
        <p>{description}</p>
      </ArticleAboutProduct>
      <ResponsiveImage {...lightImage} />
    </GridAboutProducts>
  );
}

export default AboutProduct;
