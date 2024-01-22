import { Container } from "./styles";

export function ExitButton({ title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {title}
    </Container>
  );
}