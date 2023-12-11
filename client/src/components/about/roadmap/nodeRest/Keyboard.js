import styled from "styled-components";
import LetterKey from "./LetterKey";

import { colors, contentWidth } from "./GlobalStyles";

const Keyboard = ({ array, usedLetters, handleGuess }) => {
  let isDisabled = false;

  return (
    <Wrapper>
      {array.map((letters) => {
        if (usedLetters.includes(letters)) {
          isDisabled = true;
        } else isDisabled = false;

        return (
          <LetterKey
            handleGuess={handleGuess}
            letter={letters}
            key={letters}
            isDisabled={isDisabled}
          >
            {letters}
          </LetterKey>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${colors.yellow};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px 12px;
  max-width: ${contentWidth};
  min-width: 320px;
`;

export default Keyboard;
