import React, { useEffect, useState } from "react";
import styled from "styled-components";

const OrderConfirmedFetch = ({ orderId }) => {
  const [orderInfo, setOrderInfo] = useState([]);
  useEffect(() => {
    fetch(`https://roy-portfolio-server.onrender.com/orders/${orderId}`)
      .then((res) => res.json())
      .then((result) => setOrderInfo(result.data));
  }, [orderId]);
  return (
    <Wrapper>
      <RowWrapper>
        <Receipt>Order Receipt</Receipt>
        <InfoWrapper>
          <LabelInfoWrapper>
            <BoldSpan>First Name: </BoldSpan>
            <StyledInfo>{orderInfo["fname"]}</StyledInfo>
          </LabelInfoWrapper>
          <LabelInfoWrapper>
            {" "}
            <BoldSpan>Last Name: </BoldSpan>
            <StyledInfo>{orderInfo["lname"]}</StyledInfo>
          </LabelInfoWrapper>
          <LabelInfoWrapper>
            {" "}
            <BoldSpan>Email Address:</BoldSpan>
            <StyledInfo> {orderInfo["email"]}</StyledInfo>
          </LabelInfoWrapper>
          <LabelInfoWrapper>
            <BoldSpan>Address: </BoldSpan>
            <StyledInfo> {orderInfo["address"]}</StyledInfo>
          </LabelInfoWrapper>
          <LabelInfoWrapper>
            {" "}
            <BoldSpan>Pizza: </BoldSpan>
            <StyledInfo>{orderInfo["pizza"]}</StyledInfo>
          </LabelInfoWrapper>
          <LabelInfoWrapper>
            <BoldSpan>Total: </BoldSpan>
            <StyledInfo>{orderInfo["price"]}</StyledInfo>
          </LabelInfoWrapper>
          <FreePizza>
            pizza will arrive in 30 minutes or less. If not it is On. The.
            House!
          </FreePizza>
        </InfoWrapper>
      </RowWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 25px;
  width: 100%;
  height: 90vh;
  background-color: #ffa500;
  padding-bottom: 20px;
  border-radius: 7px;
  box-shadow: black 1px 10px 10px;
  border: 0.5px solid black;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
`;

const BoldSpan = styled.span`
  font-weight: 600;
  color: whitesmoke;
  font-size: 1.2rem;
`;

const StyledInfo = styled.span`
  color: #ffa500;
  font-size: 1.2rem;
`;

const Receipt = styled.h1`
  color: #ffa500;
  border: 3px double;
  border-radius: 20%;
  width: 200px;
  padding: 10px 5px 10px 5px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: black 1px 3px 10px;
  background-color: #532718;
`;

const InfoWrapper = styled.div`
  border: 3px double #4c4a48;
  border-radius: 30%;
  line-height: 50px;
  height: 100%;
  width: 50%;
  box-shadow: black 1px 3px 10px;
  background-color: #532718;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const FreePizza = styled.span`
  font-size: 10px;
  color: white;
  text-align: center;
`;

const LabelInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
`;
export default OrderConfirmedFetch;
