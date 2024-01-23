import { Container, HeaderMenu } from "./styles";
import { PiXBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { ExitButton } from "../ExitButton";
import { InputSearch } from "../InputSearch";
import { Footer } from "../Footer";

export function SideMenu() {
  return (
    <Container>
      <HeaderMenu>
        <button>
          <PiXBold />
        </button>
        <span>Menu</span>
      </HeaderMenu>

      <InputSearch
        placeholder="Busque por pratos ou ingredientes"
        type="text"
        icon={IoIosSearch}
      />
      <ExitButton title="Sair" />

      <Footer />
    </Container>
  );
}
