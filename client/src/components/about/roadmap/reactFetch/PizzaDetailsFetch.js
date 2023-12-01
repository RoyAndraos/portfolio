import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PizzaDetailsFetch = ({ pizzaId, setSelectedRoute }) => {
  const [pizza, setPizza] = useState(null);
  useEffect(() => {
    fetch(`/menu/${pizzaId}`)
      .then((res) => res.json())
      .then((result) => setPizza(result.data));
  }, [pizzaId]);

  if (!pizza) {
    return <p>...Loading...</p>;
  }
  return (
    <Wrapper>
      <StyledOnePizza src={pizza.src} alt={pizza.name} />
      <InfoWrapper>
        <PizzaName>{pizza.name}</PizzaName>
        <Description>{pizza.description}</Description>
        <Titles>Toppings:</Titles>
        <p>{pizza.toppings}</p>
        <Titles>Prices:</Titles>
        <PricesWrapper>
          {Object.entries(pizza.price).map((element) => {
            return (
              <Prices key={element}>
                <Size>{element[0]} </Size>
                <Price>{element[1]}</Price>
              </Prices>
            );
          })}
        </PricesWrapper>
        <OrderButton
          onClick={() => {
            setSelectedRoute("/order");
          }}
        >
          🍕 Order Now! 🍕
        </OrderButton>
      </InfoWrapper>
    </Wrapper>
  );
};

const StyledOnePizza = styled.img`
  max-height: 400px;
  margin-top: 10vh;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: #ffa500;
  border: none;
  height: 90vh;
  width: 100%;
  justify-content: center;
`;
const Prices = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
`;
const PricesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
`;
const Size = styled.h2`
  text-decoration: underline;
  margin: 0;
`;
const Price = styled.p`
  margin: 0;
`;
const InfoWrapper = styled.div`
  margin-left: 15px;
  margin-top: 10vh;
`;

const OrderButton = styled.button`
  background-color: #fff;
  padding: 10px;
  margin-left: 33%;
  margin-top: 10%;
  margin-bottom: 8%;
  font-weight: 900;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Titles = styled.h2`
  text-decoration: underline;
`;
const PizzaName = styled.h1`
  text-decoration: underline;
`;
const Description = styled.p`
  font-weight: 900;
`;

export default PizzaDetailsFetch;
