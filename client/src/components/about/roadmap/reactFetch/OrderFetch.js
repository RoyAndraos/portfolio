import React, { useState } from "react";
import styled from "styled-components";

const OrderFetch = (props) => {
  const [formData, setFormData] = useState({});
  const [selectedPizza, setSelectedPizza] = useState(null);
  const { menu } = props;
  const { setSelectedRoute } = props;
  const [orders, setOrders] = useState(null);
  const { setOrderId } = props;

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/orders", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ order: formData }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => window.alert(error));
    fetch("/orders")
      .then((res) => res.json())
      .then((result) => {
        setOrders(result.data);
        setSelectedRoute(`/confirm`);
        setOrderId(`${result.data[result.data.length - 1].id}`);
      });
    if (orders === null) {
      return;
    }
  };

  if (!menu) {
    return <p>...Loading</p>;
  }

  return (
    <Wrapper>
      <StyledFrom onSubmit={handleSubmit}>
        <StyledLabel htmlFor="fname">
          First Name:
          <StyledTextInput
            placeholder="John"
            type="text"
            id="fname"
            onChange={(e) => {
              handleChange(e.target.id, e.target.value);
            }}
          />
        </StyledLabel>

        <StyledLabel htmlFor="lname">
          Last Name:
          <StyledTextInput
            placeholder="Doe"
            type="text"
            id="lname"
            onChange={(e) => {
              handleChange(e.target.id, e.target.value);
            }}
          />
        </StyledLabel>

        <StyledLabel htmlFor="address">
          Address:
          <StyledTextInput
            placeholder="123 street"
            type="text"
            id="address"
            onChange={(e) => {
              handleChange(e.target.id, e.target.value);
            }}
          />
        </StyledLabel>

        <StyledLabel htmlFor="email">
          E-mail:
          <StyledTextInput
            placeholder="example@email.com"
            type="text"
            id="email"
            onChange={(e) => {
              handleChange(e.target.id, e.target.value);
            }}
          />
        </StyledLabel>

        <StyledLabel htmlFor="phone">
          Phone Number:
          <StyledTextInput
            placeholder="111-111-111"
            type="text"
            id="phone"
            onChange={(e) => {
              handleChange(e.target.id, e.target.value);
            }}
          />
        </StyledLabel>

        <StyledLabel htmlFor="pizza">
          Pizza:
          <select
            id="pizza"
            onChange={(e) => {
              if (e.target.value === "default") {
                setSelectedPizza(null);
                return;
              } else {
                setSelectedPizza(menu[e.target.value].price);
                handleChange(e.target.id, menu[e.target.value].name);
              }
            }}
          >
            <option value={"default"}>Pick Your Poison!!</option>
            {menu.map((element) => {
              return (
                <option
                  id={element.id}
                  key={element.id}
                  value={menu.indexOf(element)}
                >
                  {element.name}
                </option>
              );
            })}
          </select>
        </StyledLabel>
        {selectedPizza !== null && (
          <StyledRadio htmlFor="price">
            Prices:
            {Object.keys(selectedPizza).map((key) => {
              return (
                <StyledPricesWrapper key={selectedPizza[key]}>
                  <input
                    type="radio"
                    name="price"
                    id="price"
                    value={selectedPizza[key]}
                    onChange={(e) => {
                      handleChange(e.target.id, e.target.value);
                    }}
                  />
                  <label htmlFor="price" style={{ color: "white" }}>
                    {key}
                  </label>
                  <label htmlFor="price" style={{ color: "white" }}>
                    {" " + selectedPizza[key]}
                  </label>
                </StyledPricesWrapper>
              );
            })}
          </StyledRadio>
        )}
        <OrderButton type="submit">Gimme my pizza!</OrderButton>
      </StyledFrom>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
  background-color: #4c4a48;
`;

const StyledFrom = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 10%;
`;
const StyledLabel = styled.label`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 50% 50%;
  color: white;
  font-size: 1.3rem;
`;

const StyledRadio = styled.label`
  display: flex;
  margin-top: 10px;
  align-items: center;
  color: white;
  font-size: 1.3rem;
`;

const StyledPricesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 25px;
`;

const OrderButton = styled.button`
  margin-top: 20px;
  background-color: #ffa500;
  border: none;
  border-radius: 5px;
  padding: 5px 0;
  font-size: 1.3rem;
  cursor: pointer;
`;

const StyledTextInput = styled.input`
  text-align: center;
  font-size: 1.3rem;
  padding: 5px 15px;
`;
export default OrderFetch;
