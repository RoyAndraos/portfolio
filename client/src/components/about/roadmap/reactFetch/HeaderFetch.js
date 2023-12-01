import styled from "styled-components";
import bannerSrc from "./pizza_banner.png";
const HeaderFetch = ({ setSelectedRoute, selectedRoute }) => {
  return (
    <Wrapper>
      <Banner src={bannerSrc} alt="pizza banner" />
      <NavBar>
        <NavItem
          className={selectedRoute === "/" ? "active" : ""}
          onClick={() => {
            setSelectedRoute("/");
          }}
        >
          Menu
        </NavItem>
        <NavItem
          className={selectedRoute === "/order" ? "active" : ""}
          onClick={() => {
            setSelectedRoute("/order");
          }}
        >
          Order
        </NavItem>
      </NavBar>
    </Wrapper>
  );
};

const NavItem = styled.button`
  border: none;
  padding: 5px;
  font-weight: bold;
  color: black;
  background-color: white;
  width: 30%;
  height: 5vh;
  cursor: pointer;
  border-radius: 5px;
  &.active {
    background: rgb(66, 133, 91);
    color: white;
    border: 2px solid black;
  }
`;

const NavBar = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  width: 35%;
  display: flex;
  justify-content: space-evenly;
  font-size: 2em;
`;

const Banner = styled.img`
  object-fit: contain;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 10vh;
  /* background: rgb(66, 133, 91); */
  background: linear-gradient(
    71deg,
    rgba(66, 133, 91, 1) 35%,
    rgba(226, 29, 29, 1) 100%
  );
`;

export default HeaderFetch;
