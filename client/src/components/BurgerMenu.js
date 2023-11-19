import styled from "styled-components";
import { useContext } from "react";
import ThemeContext from "./contexts/ColorTheme";
const BurgerMenu = ({ toggleMenu, menuOpen }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper onClick={() => toggleMenu()} menuopen={menuOpen.toString()}>
      <BarTop menuopen={menuOpen.toString()} theme={theme} />
      <BarMiddle menuopen={menuOpen.toString()} theme={theme} />
      <BarBot menuopen={menuOpen.toString()} theme={theme} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  width: ${(props) => (props.menuopen === "true" ? "25px" : "30px")};
  height: ${(props) => (props.menuopen === "true" ? "25px" : "22px")};
  position: relative;
  overflow: hidden;
  @media (max-width: 800px) {
    display: flex;
  }
`;

const BarTop = styled.div`
  width: 30px;
  height: 3px;
  background-color: #50196f;
  transition: 0.3s ease-in-out;
  transform: ${(props) =>
    props.menuopen === "true"
      ? "rotate(45deg) translateX(5.5px) translateY(9.5px)"
      : "none"};
  position: ${(props) => (props.menuopen === "true" ? "absolute" : "relative")};
  ${({ theme }) => theme === "dark" && `background-color: #a742bc;`};
`;
const BarMiddle = styled.div`
  width: 30px;
  height: 3px;
  display: ${(props) => (props.menuopen === "true" ? "none" : "block")};
  transition: 0.3s ease-in-out;
  ${({ theme }) =>
    theme === "dark"
      ? `background-color: #a742bc;`
      : `background-color: #50196f;`};
`;
const BarBot = styled.div`
  width: 30px;
  height: 3px;
  background-color: #50196f;
  transition: 0.3s ease-in-out;
  transform: ${(props) =>
    props.menuopen === "true"
      ? "rotate(-45deg) translateX(-9.5px) translateY(5.5px)"
      : "none"};
  position: ${(props) => (props.menuopen === "true" ? "absolute" : "relative")};

  position: relative;
  ${({ theme }) => theme === "dark" && `background-color: #a742bc;`};
`;

export default BurgerMenu;
