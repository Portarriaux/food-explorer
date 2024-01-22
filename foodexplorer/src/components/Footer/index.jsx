import { Container } from "./styles";
import logoFooter from "../../assets/footer.png.png";

export function Footer() {
  return (
    <Container>
      <img src={logoFooter} alt="Logo" />
      <h2>food explorer</h2>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}
