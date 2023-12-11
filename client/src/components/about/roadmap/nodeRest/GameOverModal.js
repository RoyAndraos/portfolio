import styled from "styled-components";
import { colors } from "./GlobalStyles";

const GameOverModal = ({
  game,
  word,
  setGame,
  setWordArray,
  setWrongGuesses,
  setUsedLetters,
  setWord,
}) => {
  if (!word) {
    return <p>...</p>;
  }
  return (
    <Wrapper>
      <Content>
        <Heading>You {game.win ? "Won 🤩" : "Lost 😱"} !!</Heading>
        <Word>{word}</Word>
        <Button
          onClick={() => {
            setWord(null);
            setWrongGuesses([]);
            setUsedLetters([]);
            setWordArray([]);
            setGame({
              started: false,
              over: false,
              win: false,
              label: "Start",
            });
          }}
        >
          Restart
        </Button>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;
const Content = styled.div`
  background: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  width: 300px;
  padding: 20px;
`;
const Heading = styled.p`
  color: ${colors.fuchsia};
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;
const Word = styled.p`
  color: ${colors.green};
  font-size: 24px;
  font-weight: 600;
  margin: 18px 0;
`;
const Button = styled.button`
  background: #fff;
  border: 1px solid ${colors.fuchsia};
  border-radius: 4px;
  color: ${colors.fuchsia};
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 16px 8px;
  text-transform: uppercase;
  margin: 8px;
  width: 120px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default GameOverModal;
