import { Container, ReceiptButton, Navigate, LogoHeader, Menu } from "./styles";
import { PiReceiptLight, PiListBold } from "react-icons/pi";
import { SideMenu } from "../SideMenu";
import React, { useState } from "react";
import logo from "../../assets/logo.png";

export function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <Container>
      <Navigate>
        <Menu>
          <PiListBold onClick={toggleSideMenu} />
        </Menu>

        <LogoHeader>
          <img src={logo} alt="Logo da aplicação" />
          <h1>food explorer</h1>
        </LogoHeader>

        <ReceiptButton>
          <PiReceiptLight />
          <span>0</span>
        </ReceiptButton>
      </Navigate>

      {isSideMenuOpen && <SideMenu onClose={toggleSideMenu} />}
    </Container>
  );
}
