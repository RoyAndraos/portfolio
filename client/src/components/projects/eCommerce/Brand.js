import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import Loader from "./loaders/Loader";
import styled from "styled-components";
import PaginationContainer from "./PaginationContainer";
import Sorter from "./Sorter";
//show all items from a certain brand
const Brand = () => {
  const { brandId } = useParams();
  const [brand, setBrand] = useState();
  const [products, setProducts] = useState();
  const [sortOrder, setSortOrder] = useState("default");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/brand/${brandId}`)
      .then((res) => res.json())
      .then((data) => {
        setBrand(data.data.brand);
        setProducts(data.data.products);
      })
      .catch(() => navigate("/projects/eCommerce/404"));
  }, [navigate, brandId, sortOrder]);

  if (!brand || !products) {
    return <Loader />;
  }

  return (
    <SectionDiv>
      <SorterContainer>
        <SectionTitle href={brand.url} target="_blank">
          {brand.name}
        </SectionTitle>
        <Sorter setSortOrder={setSortOrder} />
      </SorterContainer>
      <Container>
        <PaginationContainer
          items={products.map((product) => {
            return <ItemCard key={product._id} product={product} />;
          })}
          perPage={3}
        />
      </Container>
    </SectionDiv>
  );
};

const SectionDiv = styled.div`
  width: 100%;
  margin-left: 3rem;
  margin-top: 15vh;
`;

const SorterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: flex-start;
  margin: 3rem 0;
  @media (max-width: 1249px) {
    justify-content: center;
  }
`;

const SectionTitle = styled.a`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  color: #2e3659;
  letter-spacing: 0.05em;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.2);
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

export default Brand;
