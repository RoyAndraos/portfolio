import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import BackToProjects from "../../BackToProjects";
const NavBar = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/projects/hollywoodBarberShop/schedule">
        Schedule
      </StyledNavLink>
      <StyledNavLink to="/projects/hollywoodBarberShop/availability">
        Availability
      </StyledNavLink>
      <StyledNavLink to="/projects/hollywoodBarberShop/websiteTools">
        Tools
      </StyledNavLink>
      <BackToProjects to="/projects">Back to Projects</BackToProjects>
      {/* <NotifLogs /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 20px;
  font-weight: 600;
  height: 9vh;
  background-color: #035e3f;
  box-shadow: 0 0 10px black;
  border-top-right-radius: 10px;
  width: 100%;
  z-index: 1000;
`;

const StyledNavLink = styled(NavLink)`
  margin-top: 20px;
  margin-bottom: 20px;
  text-decoration: none;
  color: #efefef;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &.active {
    outline: none;
    text-decoration: underline;
    background-color: #efefef;
    color: #2c3e50;
  }
`;
export default NavBar;
