import React from "react";
import Header from "../../Header";
import Main from "../../Main";
import NavbarMovil from "../../NavbarMovil";
import { ContainerPage } from "./styled";

function Home() {
  return (
    <ContainerPage>
      <NavbarMovil />
      <Header />
      <Main />
    </ContainerPage>
  );
}

export default Home;
