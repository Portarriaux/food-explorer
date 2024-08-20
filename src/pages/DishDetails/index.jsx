import {
  Container,
  BackButton,
  ActionButtons,
  SubmitOrder,
  DishDescription,
  DetailsSection,
  TagSection,
  OrderControls,
} from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Tags } from "../../components/Tags";
import {
  PiCaretLeft,
  PiPlusLight,
  PiMinus,
  PiReceiptLight,
} from "react-icons/pi";
import cardDish from "../../assets/cardDish.png";

export function DishDetails() {
  return (
    <Container>
      <Header />
      <BackButton>
        <PiCaretLeft />
        voltar
      </BackButton>

      <DetailsSection>
        <DishDescription>
          <img src={cardDish} alt="Imagem do prato." />
          <h2>Salada Ravannello</h2>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>

          <TagSection>
            <Tags title="alface" />
            <Tags title="cebola" />
            <Tags title="pão naan" />
          </TagSection>

          <TagSection>
            <Tags title="pepino" />
            <Tags title="rabanete" />
            <Tags title="tomate" />
          </TagSection>
        </DishDescription>

        <OrderControls>
          <ActionButtons>
            <button className="decrement">
              <PiPlusLight />
            </button>

            <span>01</span>

            <button className="increment">
              <PiMinus />
            </button>
          </ActionButtons>

          <SubmitOrder>
            <PiReceiptLight />
            <span> pedir. R$ 25,00</span>
          </SubmitOrder>
        </OrderControls>
      </DetailsSection>
      <Footer />
    </Container>
  );
}
