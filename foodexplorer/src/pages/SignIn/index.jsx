import { Container, Form } from "./styles";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import  LogoImage  from "../../assets/logo.png"

export function SignIn () {
    return (
        <Container>
            <Form>
                <Header imageUrl={LogoImage} title="food Expoler" />
                <Input 
                    label="Nome"
                    placeholder="Exemplo: Maria Da Silva"
                    type="text"
                    id="name"
                />

                <Input 
                    label="Senha" 
                    placeholder= "No mínimo 6 caracteres"
                    type="password"
                    id="password"
                />

                <Button title=" Entrar" />
                <ButtonText title="Criar Conta" />
            </Form>
        </Container>
    )
}