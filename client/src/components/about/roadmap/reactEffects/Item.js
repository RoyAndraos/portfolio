import React from "react";
import styled from "styled-components";
const Item = ({ name, cost, value, numOwned, handleClick }) => {
  return (
    <ClickStyle onClick={handleClick}>
      <Name>{name}</Name>
      <Info>
        Cost: {cost} cookie(s). Produces {value} cookies/second.{" "}
        <PurchasedNumber>{numOwned}</PurchasedNumber>
      </Info>
    </ClickStyle>
  );
};

const ClickStyle = styled.button`
  background-color: transparent;
  border-bottom: 2px solid rgba(80, 80, 80, 1);
  border-top: none;
  border-left: none;
  border-right: none;
  width: 30vw;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

const Info = styled.span`
  color: #b7b7b7;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
`;

const PurchasedNumber = styled.span`
  color: #fff;
  font-size: 30px;
`;
const Name = styled.h1`
  text-align: left;
`;

export default Item;
