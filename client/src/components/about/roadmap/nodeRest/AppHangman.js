import styled from "styled-components";
import HeaderHangman from "./HeaderHangman";
import Button from "./Button";
import Deadman from "./DeadMan";
import DeadLetters from "./DeadLetters";
import TheWord from "./TheWord";
import Keyboard from "./Keyboard";
import { useEffect, useState, useCallback } from "react";
import { colors, contentWidth } from "./GlobalStyles";
import letters from "./data/letters.json";
import GameOverModal from "./GameOverModal";

const AppHangman = () => {
  const labelArray = ["Start", "Pause", "Continue"];
  let indx = 0;
  const initialGameState = {
    started: false,
    over: false,
    win: false,
    label: labelArray[indx],
  };
  const [game, setGame] = useState(initialGameState);
  const [word, setWord] = useState(null);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [usedLetters, setUsedLetters] = useState([]);
  const [wordArray, setWordArray] = useState([]);
  const [gameOverShowWord, setGameOverShowWord] = useState("");

  useEffect(() => {
    if (wrongGuesses.length === 10) {
      setGame((prevGame) => ({ ...prevGame, over: true }));
    }
    if (wordArray.length > 0 && !wordArray.includes("")) {
      setGame((prevGame) => ({ ...prevGame, over: true, win: true }));
    }
  }, [wrongGuesses.length, wordArray, game.over]);

  const handleEndGame = useCallback(() => {
    if (word && word.id) {
      fetch(`https://roy-portfolio-server.onrender.com/hangman/word/${word.id}`)
        .then((res) => res.json())
        .then((data) => {
          setGameOverShowWord((prevWord) => data.data);
        });
    }
  }, [word, setGameOverShowWord]);

  useEffect(() => {
    if (game.over) {
      handleEndGame();
    }
  }, [game.over, handleEndGame]);

  const handleStart = () => {
    if (indx < 2) {
      indx++;
    } else {
      indx = 1;
    }
    setGame({ ...game, started: !game.started, label: labelArray[indx] });
    if (word) {
      return;
    } else {
      getNewWord();
    }
  };

  const getNewWord = () => {
    fetch("https://roy-portfolio-server.onrender.com/hangman/word")
      .then((res) => res.json())
      .then((data) => {
        setWord(data.data);
        setWordArray(Array(data.data.lettercount).fill(""));
      });
  };

  const handleGuess = (letter) => {
    fetch(
      `https://roy-portfolio-server.onrender.com/hangman/guess/${word.id}/${letter}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUsedLetters([...usedLetters, letter]);
        if (!data.result.includes(true)) {
          setWrongGuesses([...wrongGuesses, letter]);
        } else if (data.result.includes(true)) {
          let tempArray = [...wordArray];
          data.result.forEach((element, index) => {
            if (element) {
              tempArray[index] = letter;
            }
          });
          setWordArray(tempArray);
        }
      });
  };

  return (
    <Wrapper>
      {game.over && (
        <GameOverModal
          word={gameOverShowWord}
          game={game}
          setGame={setGame}
          setWord={setWord}
          setWrongGuesses={setWrongGuesses}
          setUsedLetters={setUsedLetters}
          setWordArray={setWordArray}
          initialGameState={initialGameState}
        />
      )}
      <HeaderHangman />
      <Nav>
        <Button onClickFunc={handleStart}>{game.label}</Button>
      </Nav>
      {game.started && (
        <>
          <Container>
            <Deadman wrongGuesses={wrongGuesses} />
            <RightColumn>
              <DeadLetters array={wrongGuesses} />
              {word && <TheWord array={wordArray} />}
            </RightColumn>
          </Container>
          <Keyboard
            array={letters}
            word={word}
            usedLetters={usedLetters}
            setWrongGuesses={setWrongGuesses}
            setUsedLetters={setUsedLetters}
            wrongGuesses={wrongGuesses}
            handleGuess={handleGuess}
          />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.blue};
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 0 64px 0;
  z-index: 900;
`;
const Nav = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  /* max-width: ${contentWidth};
  min-width: 320px; */
  width: 100%;
  position: relative;
  padding: 20px 0;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;
export default AppHangman;
