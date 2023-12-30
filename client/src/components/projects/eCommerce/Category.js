import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import styled from "styled-components";
import Loader from "./loaders/Loader";
import PaginationContainer from "./PaginationContainer";
import Sorter from "./Sorter";

const Category = () => {
  const [itemsInCategory, setItemsInCategory] = useState();
  const [sortOrder, setSortOrder] = useState("default");
  const { category } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`/api/categories/${category}/${sortOrder}`)
      .then((res) => res.json())
      .then((data) => {
        setItemsInCategory(data.data);
      })
      .catch(() => navigate("/projects/eCommerce/404"));
  }, [category, sortOrder, navigate]);

  if (!itemsInCategory) {
    return (
      <ContainerAll>
        <Loader />
      </ContainerAll>
    );
  }

  return (
    <ContainerAll>
      <SorterContainer>
        <SectionTitle>{category} </SectionTitle>
        <Sorter setSortOrder={setSortOrder} />
      </SorterContainer>

      <Container>
        <PaginationContainer
          perPage={3}
          items={itemsInCategory.map((item) => {
            return <ItemCard product={item} key={item._id} />;
          })}
        />
      </Container>
    </ContainerAll>
  );
};

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 3rem;

  @media (max-width: 1249px) {
    justify-content: center;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #2e3659;
  letter-spacing: 0.05em;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.2);
`;

export const ContainerAll = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 90%;
  margin: 4rem 5%;
`;

const SorterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export default Category;
