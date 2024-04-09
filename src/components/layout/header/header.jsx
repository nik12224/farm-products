import React from "react";
import Button from "../../ui/button/button";
import Logo from "../../ui/logo/logo";
import "./style.css"

function Header() {
  return (
    <header>
      <Logo />
      <Button>
        Купить
      </Button>
    </header>
  );
}

export default Header;