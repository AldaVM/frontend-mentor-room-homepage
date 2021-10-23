import React from "react";
import { ContainerNavbar, ItemMenu } from "./styled";

function Navbar() {
  return (
    <ContainerNavbar>
      <ItemMenu>home</ItemMenu>
      <ItemMenu>shop</ItemMenu>
      <ItemMenu>about</ItemMenu>
      <ItemMenu>contact</ItemMenu>
    </ContainerNavbar>
  );
}

export default Navbar;
