import { Container, Form, LogoAndHeader } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import newLogo from "../../assets/newLogo.png";
export function SignIn() {
  return (
    <Container>
      <LogoAndHeader>
        <img src={newLogo} alt="Logo da aplicação" />
        <h1>food Explorer</h1>
      </LogoAndHeader>

      <Form>
        <h2>Faça login</h2>
        <Input
          label="Nome"
          placeholder="Exemplo: Maria Da Silva"
          type="text"
          id="name"
        />

        <Input
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          type="password"
          id="password"
        />

        <Button title=" Entrar" />
        <ButtonText title="Criar Conta" />
      </Form>
    </Container>
  );
}
