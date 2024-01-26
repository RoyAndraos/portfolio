import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Confirmation = () => {
  const [orderInfo, setOrderInfo] = useState();
  const { orderId } = useParams();

  //fetch order from BE
  useEffect(() => {
    fetch(
      `https://roy-portfolio-server.onrender.com/api/confirmation/${orderId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrderInfo(data.data);
      })
      .catch((err) => console.log(err));
  }, [orderId]);

  //clear cart from DB
  useEffect(() => {
    fetch("https://roy-portfolio-server.onrender.com/api/resetCart", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }, []);

  if (!orderInfo) {
    return <h1>Loading...</h1>;
  }
  return (
    <Container>
      <SectionTitle>Confirmation </SectionTitle>
      <p>
        Thank you for your purchase{" "}
        <span style={{ fontStyle: "italic" }}>{orderInfo.fname}</span>
      </p>
      <p>
        We will ship the order to:{" "}
        <span style={{ fontStyle: "italic" }}>{orderInfo.address}</span>
      </p>
      <p>
        Order ID:
        <span style={{ fontStyle: "italic" }}>{orderInfo._id}</span>
      </p>
      <ProductsContainer>
        {orderInfo.order.map((prod) => {
          return (
            <ItemContainer key={prod._id}>
              <P>{prod.name} </P>
              <IMG src={prod.imageSrc} />
              <p>{`x ${prod.quantity}`} </p>
            </ItemContainer>
          );
        })}
      </ProductsContainer>
    </Container>
  );
};

export default Confirmation;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 25rem;
  font-size: 1.3rem;
  font-family: "Roboto", sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #2e3659;
  letter-spacing: 0.05em;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.2);
`;

const IMG = styled.img`
  height: 5rem;
`;

const P = styled.p`
  font-size: 1rem;
`;

const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ItemContainer = styled.div`
  background-color: white;
  width: 15rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  text-align: center;
`;
