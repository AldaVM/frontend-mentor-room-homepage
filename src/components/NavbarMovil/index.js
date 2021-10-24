import React, { useContext } from "react";
import MenuContext from "../../state/contexts/MenuContext";
import ButtonCloseMenu from "../Buttons/ButtonCloseMenu";
import { ContainerMovilMenu, ContainerMovilNav } from "./styled";

function NavbarMovil() {
  const { isOpen } = useContext(MenuContext);

  return (
    <ContainerMovilMenu isOpenMenu={isOpen}>
      <ContainerMovilNav>
        <ButtonCloseMenu />
        <nav>
          <span>home</span>
          <span>shop</span>
          <span>about</span>
          <span>contact</span>
        </nav>
      </ContainerMovilNav>
    </ContainerMovilMenu>
  );
}

export default NavbarMovil;
