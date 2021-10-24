import React, { useContext } from "react";
import MenuContext from "../../../state/contexts/MenuContext";

function ButtonCloseMenu() {
  const { toggleMenu } = useContext(MenuContext);
  return (
    <div onClick={toggleMenu} style={{ cursor: "pointer" }}>
      <img src="images/icon-close.svg" alt="icon close menu" />
    </div>
  );
}

export default ButtonCloseMenu;
