import { Container, ReceiptButton, Navigate, LogoHeader, Menu } from "./styles";
import { PiReceiptLight, PiListBold } from "react-icons/pi";
import logo from "../../assets/logo.png";

export function Header() {
  return (
    <Container>
      <Navigate>
        <Menu>
          <PiListBold />
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
    </Container>
  );
}
