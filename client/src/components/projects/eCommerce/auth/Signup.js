import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";

import { Link, useNavigate } from "react-router-dom";

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
import { Wrapper } from "./Login";
import BackToProjects from "../../BackToProjects";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const {
    actions: { storeUser },
  } = useContext(UserContext);

  const invalidPassword =
    password.trim() && password.length > 0 && password.length < 8;

  const onSubmit = (e) => {
    e.preventDefault();
    if (password.trim() && password.length < 8) {
      setErrorMessage("Password must be greater than 8 characters");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } else {
      setIsSignup(true);

      fetch("https://roy-portfolio-server.onrender.com/api/users/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsSignup(false);
          if (data.status === 200) {
            setSuccessMessage("User Created Successfully!");
            setTimeout(() => {
              setSuccessMessage("");
              storeUser({ user: data.user });
              document.cookie = `userToken=${data.user.userToken};`;
              navigate("/projects/eCommerce");
            }, 3000);
          } else {
            setErrorMessage(data.message);
            setTimeout(() => {
              setErrorMessage("");
            }, 3000);
          }
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(err.message);
          setTimeout(() => {
            setErrorMessage("");
          }, 300);
          console.log(errorMessage);
        });
    }
  };

  return (
    <Wrapper>
      <BackToProjects />
      <Container>
        <StyledHeading>Signup</StyledHeading>
        <StyledForm onSubmit={onSubmit}>
          <StyledGroup>
            <StyledLabel>Email</StyledLabel>
            <StyledInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </StyledGroup>

          <StyledGroup>
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              $error={invalidPassword.toString()}
            />
          </StyledGroup>

          <StyledGroup>
            <StyledLabel>Confirm Password</StyledLabel>
            <StyledInput
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </StyledGroup>
          {errorMessage && (
            <StyledAlert background="#f44336">{errorMessage}</StyledAlert>
          )}
          {successMessage && (
            <StyledAlert background="#42ba96">{successMessage}</StyledAlert>
          )}
          <StyledButton
            type="submit"
            disabled={!email || !password || !confirmPassword || isSignup}
          >
            Signup
          </StyledButton>
        </StyledForm>
        <center>
          <StyledInfo>
            Already have an account?
            <span>
              <Link to={"/projects/eCommerce/login"}>Login</Link>
            </span>
          </StyledInfo>
        </center>
      </Container>
    </Wrapper>
  );
};

export default Signup;
