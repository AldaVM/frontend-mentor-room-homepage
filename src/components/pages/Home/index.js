import React from "react";
import Header from "../../Header";
import Main from "../../Main";
import { ContainerPage } from "./styled";

function Home() {
  return (
    <ContainerPage>
      <Header />
      <Main />
    </ContainerPage>
  );
}

export default Home;
