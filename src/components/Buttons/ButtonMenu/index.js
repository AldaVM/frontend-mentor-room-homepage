import React, { useContext } from "react";
import MenuContext from "../../../state/contexts/MenuContext";
import { ContainerBtnMenu } from "./styled";

function ButtonMenu() {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <ContainerBtnMenu onClick={toggleMenu}>
      <img src="images/icon-hamburger.svg" alt="menu toggle" />
    </ContainerBtnMenu>
  );
}

export default ButtonMenu;
