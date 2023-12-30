import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BrandsLoader from "./loaders/BrandsLoader.js";
import styled from "styled-components";
import PaginationContainer from "./PaginationContainer.js";

//display all the names/logos of the brands available
const Brands = () => {
  const [brands, setBrands] = useState();
  const navigate = useNavigate();
  //get Brands from Mongo
  useEffect(() => {
    fetch("/api/brands")
      .then((res) => res.json())
      .then((data) => {
        //save and sort brand names in alphabetical order

        setBrands(data.data);
      })
      .catch(() => navigate("/projects/eCommerce/404"));
  }, [navigate]);

  if (!brands) {
    return (
      <LoaderDiv>
        <BrandsLoader />
      </LoaderDiv>
    );
  }

  return (
    <Wrapper>
      <SectionDiv>
        <H2>Brands</H2>
        <BrandContainer>
          <PaginationContainer
            items={brands.map((brand) => {
              return (
                <BrandLink
                  key={brand.name}
                  to={`/projects/eCommerce/brands/${brand._id}`}
                >
                  <BrandBox>
                    <Text>{brand.name}</Text>
                  </BrandBox>
                </BrandLink>
              );
            })}
            perPage={8}
          />
        </BrandContainer>
      </SectionDiv>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Roboto", sans-serif;
`;
const LoaderDiv = styled.div`
  margin-top: -3rem;
  width: 100vw;
`;
const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: -3rem 2rem 2rem 3rem;
  gap: 3rem;
`;
const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #2e3659;
  letter-spacing: 0.05em;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.2);
`;

const BrandContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 3rem;
  text-align: center;
`;

const BrandLink = styled(Link)`
  all: unset;
`;

const BrandBox = styled.div`
  width: 10rem;
  height: 4rem;
  box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: #eef1ff;
    cursor: pointer;
  }
`;

const Text = styled.p`
  font-weight: 700;
`;

export default Brands;
