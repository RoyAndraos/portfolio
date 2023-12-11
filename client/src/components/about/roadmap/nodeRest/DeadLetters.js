import styled from "styled-components";

import { colors } from "./GlobalStyles";

const DeadLetters = ({ array }) => {
  return (
    <Wrapper>
      <h2>Dead Letters</h2>
      <List>
        {array.map((deadLetter) => {
          return <Letter key={deadLetter}>{deadLetter}</Letter>;
        })}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${colors.red};
  border: 1px solid ${colors.yellow};
  border-radius: 4px;
  padding: 10px 20px;
  height: 120px;
  width: 80%;
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 14px 0 0 0;
`;
const Letter = styled.li`
  font-size: 32px;
  opacity: 0.7;
  margin-right: 16px;
  list-style: none;
`;

export default DeadLetters;
