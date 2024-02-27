import { Container } from "./styles";
import logoFooter from "../../assets/footer.png.png";

export function Footer() {
  return (
    <Container>
      <div className="section-footer">
        <div className="footer-container">
          <img src={logoFooter} alt="Logo" />
          <h2>food explorer</h2>
        </div>

        <div className="logo-and-title">
          <p>© 2023 - Todos os direitos reservados.</p>
        </div>
      </div>
    </Container>
  );
}
