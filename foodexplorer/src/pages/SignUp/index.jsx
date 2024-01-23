import { Container, Form, LogoHeader } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import logo from "../../assets/header.Logo.png";

export function SignUp() {
  return (
    <Container>
      <LogoHeader>
        <img src={logo} alt="Logo da aplicação" />
        <h1>fodd Explorer</h1>
      </LogoHeader>

      <Form>
        <h2>Crie sua conta</h2>
        <Input
          label="Nome"
          placeholder="Exemplo: Maria da Silva"
          type="text"
          id="name"
        />
        <Input
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          id="email"
        />
        <Input
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          type="password"
          id="password"
        />

        <Button title="Criar conta" />
        <ButtonText title="Já tenho uma conta" />
      </Form>
    </Container>
  );
}
