import styled from "styled-components";

const BurgerMenu = ({ toggleMenu, menuOpen }) => {
  return (
    <Wrapper onClick={() => toggleMenu()}>
      <BarTop menuopen={menuOpen.toString()} />
      <BarMiddle menuopen={menuOpen.toString()} />
      <BarBot menuopen={menuOpen.toString()} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  height: 70%;
  @media (max-width: 800px) {
    display: flex;
  }
`;

const BarTop = styled.div`
  width: 25px;
  height: 3px;
  background-color: #50196f;
  margin: 3px 0;
  transition: 0.3s ease-in-out;
  transform: ${(props) =>
    props.menuopen === "true" ? "rotate(45deg) translateY(12.5px)" : "none"};
  position: relative;
  left: ${(props) => (props.menuopen === "true" ? "7px" : "0")};
`;
const BarMiddle = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${(props) =>
    props.menuopen === "true" ? "transparent" : "#50196f"};
  margin: 3px 0;
  transition: 0.3s ease-in-out;
`;
const BarBot = styled.div`
  width: 25px;
  height: 3px;
  background-color: #50196f;
  margin: 3px 0;
  transition: 0.3s ease-in-out;
  transform: ${(props) =>
    props.menuopen === "true" ? "rotate(-45deg) translateY(-12.5px) " : "none"};
  position: relative;
  left: ${(props) => (props.menuopen === "true" ? "7px" : "0")};
`;

export default BurgerMenu;
