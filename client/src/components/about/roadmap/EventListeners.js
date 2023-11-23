import { Wrapper, Title, Acheivement, Unlocked } from "./HTMLFundamentals";
import { useEffect, useState, useCallback, useRef } from "react";
import "../../../assets/eventListeners.css";
import styled from "styled-components";
import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import { FaQuestionCircle } from "react-icons/fa";
import gsap, { TimelineLite, Power4 } from "gsap";
const EventListeners = ({ eventOneRef }) => {
  const { theme } = useContext(ThemeContext);
  const [count, setCount] = useState(0);
  const [gameState, setGameState] = useState("not started");
  const [showInstructions, setShowInstructions] = useState(false);
  const instructionRef = useRef(null);
  const handleOpenInstriuctions = () => {
    gsap.registerPlugin();
    const tl = new TimelineLite();
    if (showInstructions) {
      setShowInstructions(false);
      tl.to(instructionRef.current, {
        opacity: 0,
        zIndex: -1,
        duration: 0.2,
        ease: Power4.easeOut,
      });
    } else {
      setShowInstructions(true);
      tl.to(instructionRef.current, {
        opacity: 1,
        duration: 0.2,
        zIndex: 100,
        ease: Power4.easeIn,
      });
    }
  };
  const countRef = useRef(count);
  const clickEffect = useCallback(
    (button, randomButtonNumber, main, announcement) => {
      if (!button.className.includes("green")) {
        setCount((prev) => prev + 1);
        button.setAttribute("class", "green game-button");
        if (countRef.current === randomButtonNumber) {
          main.appendChild(announcement);
        }
      }
    },
    []
  );

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    const main = document.getElementById("main");
    const announcement = document.getElementById("announcement");
    let timer = 5;

    const startButton = document.getElementById("start");
    const timerSpan = document.getElementById("timer");
    startButton &&
      startButton.addEventListener("click", () => {
        if (gameState === "ended" || gameState === "not started") {
          setGameState("started");
          announcement.innerHTML = "";
          announcement.style.backgroundColor = "transparent";
          announcement.style.zIndex = "-1";
          const randomButtonNumber = Math.round(Math.random() * 10) + 1;

          setCount(0);

          const countDown = setInterval(() => {
            if (timer === 0) {
              timerSpan.innerHTML = timer;
              clearInterval(countDown);
            } else {
              timerSpan.innerHTML = timer;
              timer--;
            }
          }, 1000);

          // Clear old buttons
          main.innerHTML = "";

          for (let i = 1; i <= randomButtonNumber; i++) {
            const randomTop = Math.round(Math.random() * 90);
            const randomLeft = Math.round(Math.random() * 90);
            const button = document.createElement("button");
            button.setAttribute("id", `button-${i}`);
            button.setAttribute("class", "game-button");
            button.innerHTML = i;
            button.style.left = randomTop + "%";
            button.style.top = randomLeft + "%";
            button.addEventListener("click", () => {
              clickEffect(button, randomButtonNumber, main, announcement);
            });
            main.appendChild(button);
          }

          setTimeout(() => {
            if (countRef.current < randomButtonNumber) {
              announcement.innerHTML = "You lost!";
              announcement.style.backgroundColor = "red";
              announcement.style.zIndex = "1";
            } else if (countRef.current === randomButtonNumber) {
              announcement.innerHTML = "You won!";
              announcement.style.backgroundColor = "darkgreen";
              announcement.style.zIndex = "1";
            }
            setGameState("ended");
            clearInterval(countDown); // Clear the countdown when the game ends
          }, 6000);
        }
      });
  }, [gameState, clickEffect]);

  return (
    <Wrapper id="section-8" ref={eventOneRef}>
      <Title theme={theme}>Event Listeners 1, Aim Game!</Title>
      <Container>
        <GameWrapper>
          <StyledInstructions ref={instructionRef}>
            Game rules: <br />
            click on all the red buttons before the timer runs out!
            <br />
            Coding Instructions: <br />
            Make use of the addEventListener() method to make an aim game, where
            the user has to click on all the buttons created (random number of
            buttons positioned randomly on the game board), before the timer
            runs out.
          </StyledInstructions>
          <div className="header" id="header">
            <span id="timer"></span>
            <button
              id="start"
              className="start"
              disabled={gameState === "started"}
            >
              {gameState === "not started" ? "Start" : "Restart"}
            </button>
            <div
              style={{ marginLeft: "20px" }}
              onClick={() => {
                handleOpenInstriuctions();
              }}
            >
              <MoreInfo theme={theme} />
            </div>
          </div>
          <div id="main" className="game-board"></div>
          <div id="announcement"></div>
        </GameWrapper>
      </Container>
      <Acheivement style={{ top: "10%", position: "relative" }} theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />I can now use event listeners.
      </Acheivement>
    </Wrapper>
  );
};

const GameWrapper = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  border-top: 3px solid #50196f;
  border-right: 3px solid #50196f;
  border-top-right-radius: 20px;
  color: black;
  line-height: 2;

  ${({ theme }) => theme === "dark" && `color: white;`};
  @media (max-width: 1000px) {
    font-size: 1.2rem;
    border: 3px solid #50196f;
    border-radius: 20px;
    margin-bottom: 10%;
    width: 85%;
  }
`;
const MoreInfo = styled(FaQuestionCircle)`
  font-size: 3.5rem;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: 0.2s ease-in-out;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  &:hover {
    color: grey;
  }
`;

const StyledInstructions = styled.div`
  background-color: darkgrey;
  color: white;
  border-radius: 10px;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  position: absolute;
  width: 80%;
  padding: 2% 10%;
  top: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  z-index: -1;
  @media (max-width: 1000px) {
    font-size: 1rem;
    height: fit-content;
    padding: 10% 10%;
  }
`;
export default EventListeners;
