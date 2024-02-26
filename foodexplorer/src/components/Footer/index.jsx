import { Container } from "./styles";
import logoFooter from "../../assets/footer.png.png";

export function Footer() {
  return (
    <Container>
      <div className="logo-and-title">
        <img src={logoFooter} alt="Logo" />
        <h2>food explorer</h2>
      </div>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}
