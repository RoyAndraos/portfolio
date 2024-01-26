import { useState } from "react";
import { useEffect } from "react";
import AllProductsLoader from "./loaders/AllProductsLoader";
import ItemCard from "./ItemCard";
import { SectionTitle, ContainerAll, Container } from "./Category";
import Sorter from "./Sorter";
import styled from "styled-components";
import PaginationContainer from "./PaginationContainer";
import { useNavigate } from "react-router-dom";
const AllProducts = () => {
  const [products, setProducts] = useState();
  const [sortOrder, setSortOrder] = useState("default");
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://roy-portfolio-server.onrender.com/api/products/${sortOrder}`)
      .then((res) => res.json())
      .then((result) => setProducts(result.data))
      .catch(() => {
        navigate("/404");
      });
  }, [navigate, sortOrder]);

  if (!products)
    return (
      <ContainerAll>
        <AllProductsLoader />
      </ContainerAll>
    );

  return (
    <ContainerAll>
      <SorterContainer>
        <SectionTitle>All items</SectionTitle>

        <Sorter setSortOrder={setSortOrder} />
      </SorterContainer>
      <Container>
        <PaginationContainer
          items={products.map((item) => {
            return <ItemCard product={item} key={item._id} />;
          })}
          perPage={3}
        />
      </Container>
    </ContainerAll>
  );
};

const SorterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export default AllProducts;
