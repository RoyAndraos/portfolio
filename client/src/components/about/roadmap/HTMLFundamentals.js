import styled from "styled-components";
import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
const HTMLFundamentals = ({ htmlRef }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper ref={htmlRef} id="section-1">
      <Title theme={theme} $showgame={"false"}>
        HTML Fundamentals
      </Title>
      <Info theme={theme}>
        I learned how to use the right html tag for different use cases.
        <br />I had to use{" "}
        {
          "<a></a>, <ul></ul>, <ol></ol>, <li></li>, <h1></h1>, <p></p>, <img></img>, <button></button> and more "
        }
        to replicate certain examples.
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}> Acheivement Unlocked!</Unlocked>
        <br />I can now use html tags efficiently.
      </Acheivement>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 1000px) {
    height: 70%;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 1%;
  color: #50196f;
  position: relative;
  left: -35%;
  ${({ theme }) => theme === "dark" && `color: #a742bc;`};
  top: ${(props) => (props.$showgame === "false" ? "0" : "5%")};
  @media (max-width: 1000px) {
    left: 0;
    margin-bottom: 10%;
  }
`;
export const Info = styled.p`
  font-size: 1.5rem;
  padding: 5%;
  margin: 0;
  border-top: 3px solid #50196f;
  border-right: 3px solid #50196f;
  border-top-right-radius: 20px;
  color: black;
  line-height: 2;
  width: 80%;
  ${({ theme }) => theme === "dark" && `color: white;border-color: #a742bc`};
  @media (max-width: 1000px) {
    font-size: 1.2rem;
    border: 3px solid #50196f;
    border-radius: 20px;
    margin-bottom: 10%;
    width: 85%;
  }
`;
export const Acheivement = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  color: black;
  margin: 0;
  margin-top: 3%;
  padding: 1.5% 1.5%;
  border-left: 3px solid #50196f;
  border-top: 3px solid #50196f;
  border-top-left-radius: 20px;
  ${({ theme }) => theme === "dark" && `color: white;border-color: #a742bc`};
  font-weight: 700;
  @media (max-width: 1000px) {
    border: 3px solid #50196f;
    border-radius: 20px;
    font-size: 1.2rem;
    padding: 5%;
    width: 85%;
  }
`;

export const Unlocked = styled.span`
  color: #50196f;
  font-weight: 700;
  ${({ theme }) => theme === "dark" && `color: #a742bc;`};
`;
export default HTMLFundamentals;
