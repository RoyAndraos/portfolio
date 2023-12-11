import styled from "styled-components";
import { colors } from "./GlobalStyles";

const HeaderHangman = () => {
  return (
    <Wrapper>
      <H1>Hang 'im!</H1>
      <Text>You know the drill. Guess the word, or else.</Text>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: ${colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  width: 100%;
  color: ${colors.yellow};
  padding: 0 32px;
`;
const H1 = styled.h1`
  font-size: 48px;
  margin-bottom: 6px;
`;
const Text = styled.p``;

export default HeaderHangman;
