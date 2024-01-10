import { Container, Form, LogoAndHeader } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import logo from "../../assets/logo.png";

export function SignUp() {
  return (
    <Container>

        <LogoAndHeader>
          <img src={logo} alt="Logo da aplicação" />
          <h1>food Explorer</h1>
        </LogoAndHeader>

      <Form>
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
          placeholder="No minimo 6 caracteres"
          type="password"
          id="password"
        />

        <Button title="Criar conta" />

        <ButtonText title="Já tenho uma conta" />
      </Form>
    </Container>
  );
}
