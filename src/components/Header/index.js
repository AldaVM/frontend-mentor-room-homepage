import React from "react";
import ButtonMenu from "../Buttons/ButtonMenu";
import Logo from "../Logo";
import Navbar from "../Navbar";
import { HeaderContainer } from "./styled";

function Header() {
  return (
    <HeaderContainer>
      <ButtonMenu />
      <Logo />
      <Navbar />
    </HeaderContainer>
  );
}

export default Header;
