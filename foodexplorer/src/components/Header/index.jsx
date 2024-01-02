import { Container, HeaderTitle } from "./styles";

export function Header({ imageUrl, title }) {
  return (
    <Container>
      <HeaderTitle>
        <img src={imageUrl} alt="Logo" />
        <h1>{title}</h1>
      </HeaderTitle>
    </Container>
  );
}


