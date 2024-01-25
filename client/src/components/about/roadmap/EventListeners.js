import { Wrapper, Unlocked, Info, Acheivement } from "./HTMLFundamentals";
import { Title } from "./TheDomPartTwo";
import { useEffect, useState, useCallback, useRef } from "react";
import "../../../assets/eventListeners.css";
import styled from "styled-components";
import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import { FaQuestionCircle } from "react-icons/fa";
import gsap, { TimelineLite, Power4 } from "gsap";
import { Play, Line } from "./TheDomPartTwo";
import {
  animateToShowProject,
  animateButton,
  unanimateButton,
} from "../../../helpers";

const EventListeners = ({ eventOneRef, isMobile }) => {
  const { theme } = useContext(ThemeContext);
  const [count, setCount] = useState(0);
  const [gameState, setGameState] = useState("not started");
  const [showInstructions, setShowInstructions] = useState(false);
  const instructionRef = useRef(null);
  const [showGame, setShowGame] = useState(false);
  let lineTop = useRef(null);
  let lineLeft = useRef(null);
  let lineRight = useRef(null);
  let buttonRef = useRef(null);
  const handleOpenInstriuctions = () => {
    gsap.registerPlugin();
    const tl = new TimelineLite();
    if (showInstructions) {
      setShowInstructions(false);
      tl.to(instructionRef.current, {
        opacity: 0,
        duration: 0.2,
        zIndex: -1,
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
  }, [gameState, clickEffect, showGame]);
  const playGame = () => {
    animateToShowProject(setShowGame, showGame, eventOneRef);
  };
  return (
    <Wrapper id="section-8" ref={eventOneRef}>
      <Title theme={theme} $showgame={showGame.toString()}>
        Event Listeners 1, Aim Game!{" "}
        {!isMobile && (
          <Play
            onClick={() => playGame()}
            ref={(el) => (buttonRef = el)}
            theme={theme}
            onMouseEnter={() => {
              animateButton(lineLeft, lineRight, lineTop, buttonRef);
            }}
            onMouseLeave={() => {
              unanimateButton(lineLeft, lineRight, lineTop, buttonRef);
            }}
          >
            {showGame ? "Back To Instructions" : "Play Aim Game"}
            <Line ref={(el) => (lineTop = el)} theme={theme} />
            <Line ref={(el) => (lineLeft = el)} theme={theme} />
            <Line ref={(el) => (lineRight = el)} theme={theme} />
          </Play>
        )}
      </Title>
      {showGame ? (
        <GameWrapper>
          <StyledInstructions ref={instructionRef}>
            Game rules: <br />
            Click start, but be ready because once you do, random red buttons
            will spawn! click on all them before the timer runs out!
            <br />
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
      ) : (
        <>
          <Info theme={theme}>
            Write the required JavaScript code to make the game work; <br />
            given the game board, make a start button that when clicked, spawns
            a random number of red buttons. <br />
            The user must click on all the red buttons before the timer runs
            out. Buttons that are clicked turn green. <br />
          </Info>
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br />
            Button: "I Just Got Clicked"
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

const GameWrapper = styled.div`
  width: 90%;
  height: 85%;
  position: relative;
  top: 5%;
  z-index: 10;
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
  height: 80%;
  display: flex;
  justify-content: center;
  transition: opacity 0.2s ease-in-out;
  line-height: 3;
  text-align: center;
  font-size: 1.5rem;
  opacity: 0;
  z-index: -1;
  @media (max-width: 1000px) {
    font-size: 1rem;
    height: fit-content;
    padding: 10% 10%;
  }
`;

export default EventListeners;
