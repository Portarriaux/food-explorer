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
    </Container>
  );
}
