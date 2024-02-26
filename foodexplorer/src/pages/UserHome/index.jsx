import {
  Container,
  LogoHome,
  CardRef,
  Description,
  CardMainExtra,
  CardMain,
} from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { DishCard } from "../../components/DishCard";
import { PiHeartStraightBold } from "react-icons/pi";
import banner from "../../assets/banner.png";
import Prato_01 from "../../assets/prato_01.png";
import Prato_02 from "../../assets/prato_02.png";
import Prato_03 from "../../assets/prato_03.png";
import Dish from "../../assets/dish.png";

export function UserHome() {
  return (
    <Container>
      <Header />
      <LogoHome>
        <picture>
          <img src={banner} alt="Logo Home" />
        </picture>

        <div className="logo-info-home">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado de preparo com ingredientes selecionados.</p>
        </div>
      </LogoHome>

      <Description>Refeições</Description>

      <CardRef>
        <DishCard
          icon={PiHeartStraightBold}
          title="Salada Ravanello"
          price={79.97}
          onIncrement={() => {}}
          onDecrement={() => {}}
          imgSrc={Prato_01}
          alt={"Salada Ravenello"}
        />

        <DishCard
          icon={PiHeartStraightBold}
          title="Spaguetti Gambe"
          price={49.97}
          onIncrement={() => {}}
          onDecrement={() => {}}
          imgSrc={Prato_02}
          alt={"Spaguetti Gambe"}
        />
      </CardRef>

      <Description>Pratos Principais</Description>

      <CardMain>
        <DishCard
          icon={PiHeartStraightBold}
          title="Prugna Pie"
          price={79.97}
          onIncrement={() => {}}
          onDecrement={() => {}}
          imgSrc={Prato_01}
          alt={"Prugna Pie"}
        />

        <DishCard
          icon={PiHeartStraightBold}
          title="Peachy Pastrie"
          price={32.97}
          onIncrement={() => {}}
          onDecrement={() => {}}
          imgSrc={Prato_03}
          alt={"Peachy Pastrie"}
        />
      </CardMain>

      <Description>Pratos Principais</Description>

      <CardMainExtra>
        <DishCard
          icon={PiHeartStraightBold}
          title="Espresso"
          price={15.97}
          onIncrement={() => {}}
          onDecrement={() => {}}
          imgSrc={Dish}
          alt={"Espresso"}
        />

        <DishCard
          icon={PiHeartStraightBold}
          title="Suco de maracujá"
          price={13.97}
          onIncrement={() => {}}
          onDecrement={() => {}}
          imgSrc={Dish}
          alt={"Maracujá"}
        />
      </CardMainExtra>

      <Footer />
    </Container>
  );
}
