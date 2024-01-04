import { Container, Form, LogoAndHeader } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import logo from "../../assets/logo.png";

export function SignIn() {
  return (
    <Container>
      <Form>
        <LogoAndHeader>
              <img src={logo} alt="Logo da aplicação" />
            <h1>fodd Explorer</h1>
        </LogoAndHeader> 

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
