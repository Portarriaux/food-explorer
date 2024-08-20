import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { HighlightCard } from "../../components/HighlightCard ";
import logoHome from "../../assets/logoHome.png"
export function UserHome() {
  return (
    <Container>
      <Header />

      <HighlightCard
        image={logoHome}
        title="Sabores inigualáveis"
        text="Sinta o cuidado de preparo com ingredientes selecionados"
      />

      <Section title="Refeições" />
    </Container>
  );
}
