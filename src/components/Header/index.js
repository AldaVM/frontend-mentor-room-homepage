import React from "react";
import Logo from "../Logo";
import Navbar from "../Navbar";
import { HeaderContainer } from "./styled";

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Navbar />
    </HeaderContainer>
  );
}

export default Header;
