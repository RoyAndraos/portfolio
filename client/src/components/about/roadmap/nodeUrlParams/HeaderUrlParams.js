import styled from "styled-components";

const HeaderUrlParams = ({ pageTitle, setRoute, route }) => {
  return (
    <Wrapper>
      {route !== "/" && (
        <LinkToHome
          onClick={() => {
            setRoute("/");
          }}
        >
          Back to Home
        </LinkToHome>
      )}

      <StyledH1>{pageTitle}</StyledH1>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  flex: 0 0 60px;
  display: flex;
  align-items: center;
  height: 10vh;
  border-bottom: 1px solid #808080;
  padding: 0 24px;
  color: #9a0000;
`;
const StyledH1 = styled.h1`
  margin: 0 auto;
`;
const LinkToHome = styled.button`
  position: absolute;
  left: 20%;
  background-color: #5f0000;
  border: 3px solid transparent;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 5px;
  color: whitesmoke;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: whitesmoke;
    color: #5f0000;
    border: 3px solid #5f0000;
  }
`;
export default HeaderUrlParams;
