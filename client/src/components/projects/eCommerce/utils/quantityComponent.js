import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState } from "react";

const QuantityComponent = ({
  itemPrice,
  quantity,
  setQuantity,
  numInStock,
}) => {
  const [newPriceItem, setNewPriceItem] = useState();

  /*==========================
  Function to set the new price
 ============================ */
  const calculateNewPrice = (price, quantity) => {
    return (price * quantity) % 1 === 0
      ? price * quantity
      : (price * quantity).toFixed(2);
  };

  /*===============================
    Function to change the price item
    ===============================*/
  const handleClick = (handler) => {
    if (handler === "add" && quantity < numInStock) {
      setQuantity((prev) => prev + 1);
    } else if (handler === "remove" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setNewPriceItem(calculateNewPrice(itemPrice, quantity));
  }, [quantity, itemPrice]);

  return (
    <PriceContainer>
      <p style={{ opacity: 0.5 }}>Quantity</p>
      <Container>
        <ContainerAdd>
          <Button onClick={() => handleClick("remove")}>
            <RemoveIcon />
          </Button>
        </ContainerAdd>
        <ContainerNumber>{quantity}</ContainerNumber>
        <ContainerRemove>
          <Button onClick={() => handleClick("add")}>
            {numInStock === quantity ? (
              <StyledAddIcon disabled={true} />
            ) : (
              <StyledAddIcon disabled={false} />
            )}
          </Button>
        </ContainerRemove>
      </Container>

      <Price>{quantity === 1 ? `$${itemPrice}` : `$${newPriceItem}`}</Price>
    </PriceContainer>
  );
};

export default QuantityComponent;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0 2rem;
  border: 1px solid #9d9d9d;
  border-radius: 5px;

  @media (max-width: 864px) {
    margin: 1rem 0;
  }
`;

const ContainerAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d0d0d0;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  color: white;
  margin: 0 0 0 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: #d0d0d0;
  }
`;
const ContainerNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  user-select: none;
  cursor: default;
`;
const ContainerRemove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d0d0d0;
  color: white;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem 0 0;
  &:hover {
    cursor: pointer;
    background-color: #d0d0d0;
  }
`;

const Button = styled.button`
  all: unset;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 1rem 0rem;

  @media (max-width: 1093px) {
    font-size: 1rem;
  }
  @media (max-width: 864px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 0rem;
  }
`;

const Price = styled.p`
  font-weight: 900;
  user-select: none;
  cursor: default;
`;

const StyledAddIcon = styled(AddIcon)`
  color: ${(props) => (props.disabled ? "red" : "white")};
`;
