import React, { useState } from "react";
import ManuContext from "../contexts/MenuContext";

function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <ManuContext.Provider value={{ isOpen: isOpen, toggleMenu }}>
      {children}
    </ManuContext.Provider>
  );
}

export default MenuProvider;
