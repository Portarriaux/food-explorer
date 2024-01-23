import React from "react";
import { Container, ActionButtons, ButtonAdd } from "./styles";

export function DishCard({
  title,
  price,
  onIncrement,
  onDecrement,
  imgSrc,
  icon: Icon,
}) {
  return (
    <Container>
      {Icon && <Icon size={24} />}
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>
        <span>$</span>
        {price ? price.toFixed(2) : "Price not available"}
      </p>

      <ActionButtons>
        <button className="decrement" onClick={onDecrement}>
          <span>-</span>
        </button>

        <span>01</span>

        <button className="increment" onClick={onIncrement}>
          <span>+</span>
        </button>
      </ActionButtons>

      <ButtonAdd>Incluir</ButtonAdd>
    </Container>
  );
}
