import styled from "styled-components";

export const Container = styled.div`
  width: 768px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 5px;
  padding: 1.7em;
  font-family: "Poppins", sans-serif;
`;

export const StyledHeading = styled.h1`
  color: #57aeb6;
  text-align: center;
  font-size: 2em;
  margin-bottom: 1em;
  font-weight: bold;
`;

export const StyledGroup = styled.div`
  margin-bottom: 1.5em;
  width: 100%;
`;

export const StyledForm = styled.form`
  background-color: transparent;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1em;
  &:focus {
    ${(props) => !props.$error === "true" && "outline: none;"}
    border-color: ${(props) => (props.$error === "true" ? "#f78" : "#ccc")};
  }
`;

export const StyledButton = styled.button`
  background-color: #57aeb6;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
  opacity: ${(props) => (!props.enabled ? 0.5 : 1)};
  box-sizing: border-box;
  font-size: 1.2em;
  width: 100%;
`;

export const StyledAlert = styled.div`
  padding: 0.5em;
  background-color: ${(props) => props.background};
  color: white;
  margin: 0.2em 0;
  border-radius: 5px;
`;

export const StyledInfo = styled.p`
  text-align: center;
  margin-top: 12px;
  & span {
    color: #ccc;
    text-decoration: underline;
    margin-left: 10px;
    a {
      color: #adaaa8;
    }
  }
`;
