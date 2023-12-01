import React from "react";
import styled from "styled-components";

const HomepageFetch = (props) => {
  const { menu } = props;
  const { setPizzaId } = props;
  const { setSelectedRoute } = props;
  return (
    <StyledUl>
      {menu.map(({ id, name, description, price, src, toppings }) => {
        return (
          <StyledMenuItem key={id}>
            <StyledDiv>
              <StyledLink
                onClick={() => {
                  setPizzaId(id);
                  setSelectedRoute("/menu/pizza");
                }}
              >
                {name}
              </StyledLink>
              <Description>{description}</Description>
              <StyledInfo>
                <BoldText>Toppings</BoldText>
                :<br /> {toppings}
              </StyledInfo>
              <StyledInfoLeft>
                <BoldText>Starting at:</BoldText> {price["Small"]}
              </StyledInfoLeft>
            </StyledDiv>
            <div>
              <StyledImg src={src} />
            </div>
          </StyledMenuItem>
        );
      })}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  background-color: #4c4a48;
  height: 90vh;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 28% 28% 28%;
  margin: 0;
`;

const StyledImg = styled.img`
  display: block;
  aspect-ratio: 1/1;
  width: 130px;
  border-radius: 6px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const StyledMenuItem = styled.li`
  display: grid;
  grid-template-columns: 70% 30%;
  flex-direction: row;
  align-items: center;
  background-color: #ffa500;
  margin: 20px;
  width: 80%;
  box-shadow: black 0px 10px 10px;
  border-radius: 20px;
  padding: 10px;
  height: 200px;
  position: relative;
`;

const StyledLink = styled.button`
  border-bottom: 10px double #4c4a48;
  border-top: 10px #4c4a48 double;
  font-size: 20px;
  color: #4c4a48;
  font-weight: 900;
  padding: 10px;
  border-radius: 20%;
  margin: 0 auto;
  background-color: transparent;
  border-left: none;
  border-right: none;
  margin-bottom: 5px;
  cursor: pointer;
`;

const StyledInfo = styled.span`
  padding: 5px;
  color: #4c4a48;
`;

const StyledInfoLeft = styled.span`
  position: absolute;
  color: #4c4a48;
  right: 10px;
  bottom: 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const BoldText = styled.span`
  font-weight: 900;
  font-style: italic;
  color: purple;
`;

const Description = styled.span`
  color: purple;
  padding: 10px 10px 10px 25px;
  text-align: center;
`;
export default HomepageFetch;
