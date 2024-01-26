import { useContext, useState } from "react";
import styled from "styled-components";
import {
  Container,
  StyledAlert,
  StyledButton,
  StyledForm,
  StyledGroup,
  StyledHeading,
  StyledInfo,
  StyledInput,
  StyledLabel,
} from "./Form";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import BackToProjects from "../../BackToProjects";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    actions: { storeUser },
  } = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();

    setIsLogin(true);
    fetch("https://roy-portfolio-server.onrender.com/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLogin(false);
        if (data.status === 200) {
          storeUser({
            user: data.user,
          });
          document.cookie = `userToken=${data.user.userToken};`;
          navigate("/projects/eCommerce");
        } else {
          setErrorMessage(data.message);
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const invalidPassword = password.trim().length === 0 || password.length < 8;
  return (
    <Wrapper>
      <BackToProjects />
      <Container>
        <StyledHeading>Login</StyledHeading>
        <StyledForm onSubmit={onSubmit}>
          <StyledGroup>
            <StyledLabel>Email</StyledLabel>
            <StyledInput
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </StyledGroup>

          <StyledGroup>
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </StyledGroup>
          {errorMessage && (
            <StyledAlert background="#f44336">{errorMessage}</StyledAlert>
          )}
          <StyledButton
            type="submit"
            disabled={!email || !password || isLogin || invalidPassword}
          >
            Login
          </StyledButton>
        </StyledForm>
        <center>
          <StyledInfo>
            Don't have an account?
            <span>
              <Link to={"/projects/eCommerce/signup"}>Signup</Link>
            </span>
          </StyledInfo>
        </center>
      </Container>
    </Wrapper>
  );
};
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Login;
