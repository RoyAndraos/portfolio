import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContextReactContext } from "./UserContextReactContext";
const SigninReactContext = ({ setRoute }) => {
  const [name, setName] = useState("");

  const { setCurrentUser } = useContext(UserContextReactContext);

  const handleSubmit = () => {
    sessionStorage.setItem("user", name);
    setCurrentUser(name);
    setRoute("/");
  };
  const handleChange = (value) => {
    setName(value);
  };
  return (
    <Wrapper>
      <SignInBox>
        <Input
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Your first Name"
        />
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </SignInBox>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-repeat: no-repeat;
  background-image: url("/reactContextAssets/facespace_bg.jpg");
  background-size: 100%, 100vh;
`;

const SignInBox = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Button = styled.button`
  margin: 0 20px 20px 20px;
  padding: 5px;
  background-color: #cc5500;
  border: none;
  color: white;
  font-weight: 900;
  border-radius: 5px;
  font-size: 25px;
  cursor: pointer;
`;

const Input = styled.input`
  padding: 7px;
  font-size: 25px;
  margin: 20px 20px 5px 20px;
`;
export default SigninReactContext;
