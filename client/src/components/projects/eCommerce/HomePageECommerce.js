import styled from "styled-components";
import SectionOneHomePage from "./SectionHomePage/SectionOneHomePage";
import SectionTwoHomePage from "./SectionHomePage/SectionTwoHomePage";
import SectionThreeHomePage from "./SectionHomePage/SectionThreeHomePage";
import SectionFourHomePage from "./SectionHomePage/SectionFourHomePage";
import SectionFiveHomePage from "./SectionHomePage/SectionFiveHomePage";
import Footer from "./Footer";

const HomePageECommerce = () => {
  return (
    <>
      <ContainerAll>
        <SectionOneHomePage />
        <SectionTwoHomePage />
        <SectionThreeHomePage />
        <SectionFourHomePage />
        <SectionFiveHomePage />
      </ContainerAll>
      <Footer />
    </>
  );
};

export default HomePageECommerce;

const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  width: 90%;
  margin: 10vh 5%;
  z-index: 1;
  font-family: "Roboto", sans-serif;
`;
