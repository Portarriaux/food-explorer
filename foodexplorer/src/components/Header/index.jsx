
import { Container, ReceiptButton, Navigate, LogoHeader, Menu } from "./styles";
import { PiReceiptLight, PiListBold } from "react-icons/pi";
import { SideMenu } from "../SideMenu";
import React, { useState } from "react";
import {
  Container,
  ReceiptButton,
  Navigate,
  LogoHeader,
  Menu,
  SearchBarContainer,
  SearchBarInput,
  LogoutButton,
} from "./styles";
import { PiReceiptLight, PiListBold, PiSignOut } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";

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

        <SearchBarContainer>
          <IoIosSearch size={24} />
          <SearchBarInput placeholder="Busque por pratos ou ingredientes" />
        </SearchBarContainer>

        <ReceiptButton>
          <PiReceiptLight />
          <span className="count">0</span>
        </ReceiptButton>

        <LogoutButton>
          <PiSignOut />
        </LogoutButton>
      </Navigate>

      {isSideMenuOpen && <SideMenu onClose={toggleSideMenu} />}
    </Container>
  );
}
