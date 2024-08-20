import { Container, InfoSection} from "./styles";

export function HighlightCard({ image, title, text }) {
  return (
    <Container>
      <img src={image} alt={title} />
      <InfoSection>
        <h1>{title}</h1>
        <p>{text}</p>
      </InfoSection>
    </Container>
  );
}
