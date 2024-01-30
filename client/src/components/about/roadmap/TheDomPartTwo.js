import { useContext, useEffect, useState, useRef } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import { Wrapper, Unlocked, Acheivement } from "./HTMLFundamentals";
import "../../../assets/frogRace.css";
import finishLine from "../../../assets/finshline.jpg";
import styled from "styled-components";
import { selectRandomFrogs, frogStable } from "../../../helpers";
import { FaQuestionCircle } from "react-icons/fa";
import gsap from "gsap";
import { TimelineLite, Power4 } from "gsap/gsap-core";
import {
  animateToShowProject,
  animateButton,
  unanimateButton,
} from "../../../helpers";
import { InfoWrapper } from "./ReactFetch";

const TheDomPartTwo = ({ domTwoRef, isMobile }) => {
  const { theme } = useContext(ThemeContext);
  const [gameStarted, setGameStarted] = useState(false);
  const [racers, setRacers] = useState(selectRandomFrogs(frogStable));
  const [bet, setBet] = useState(null);
  const [result, setResult] = useState(null);
  const tippyRef = useRef(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showGame, setShowGame] = useState(false);
  let lineLeft = useRef(null);
  let lineRight = useRef(null);
  let lineTop = useRef(null);
  let buttonRef = useRef(null);

  const handleOpenInstriuctions = () => {
    gsap.registerPlugin();
    const tl = new TimelineLite();
    if (showInstructions) {
      setShowInstructions(false);
      tl.to(tippyRef.current, {
        opacity: 0,
        duration: 0.2,
        zIndex: -1,
        ease: Power4.easeOut,
      });
    } else {
      setShowInstructions(true);
      tl.to(tippyRef.current, {
        opacity: 1,
        duration: 0.2,
        zIndex: 100,
        ease: Power4.easeIn,
      });
    }
  };
  const reset = () => {
    const isGameDone =
      document.getElementById("lane-number-1").style.left === "100%" &&
      document.getElementById("lane-number-2").style.left === "100%" &&
      document.getElementById("lane-number-3").style.left === "100%";
    if (!isGameDone) {
      return;
    }
    setGameStarted(false);
    setBet(null);
    setRacers(selectRandomFrogs(frogStable));
    setResult(null);
    // Reset lane content to initial state
    racers.forEach((element, index) => {
      const laneId = "lane-" + (index + 1);
      const laneTaker = document.getElementById("lane-number-" + (index + 1));

      if (laneTaker) {
        laneTaker.innerHTML = element["number"];
        laneTaker.style.color = element["color"];
        laneTaker.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px;";
        laneTaker.style.fontWeight = "bolder";
        laneTaker.className = "frog";
        const laneTakerName = document.getElementById(
          "lane-name-" + (index + 1)
        );

        if (laneTakerName) {
          laneTakerName.className = "frog-name";
          laneTakerName.innerHTML = element["name"];
          document.getElementById(laneId).appendChild(laneTakerName);
        }
      }
    });

    // Reset place-takers content
    document.getElementById("place-taker-1").innerHTML = "";
    document.getElementById("place-taker-2").innerHTML = "";
    document.getElementById("place-taker-3").innerHTML = "";
    document.getElementById("lane-number-1").style.left = "0";
    document.getElementById("lane-number-2").style.left = "0";
    document.getElementById("lane-number-3").style.left = "0";
  };
  useEffect(() => {
    //puts the racers in the lanes and styles the lanes the way they should be styled
    //*************************************************************************
    racers.forEach((element, index) => {
      const laneId = "lane-" + (index + 1);
      const laneTaker = document.getElementById("lane-number-" + (index + 1));

      // Check if the element exists before trying to modify it
      if (laneTaker) {
        laneTaker.innerHTML = element["number"];
        laneTaker.style.color = element["color"];
        laneTaker.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px;";
        laneTaker.style.fontWeight = "bolder";
        laneTaker.className = "frog";

        const laneTakerName = document.getElementById(
          "lane-name-" + (index + 1)
        );

        // Check if the element exists before trying to modify it
        if (laneTakerName) {
          laneTakerName.className = "frog-name";
          laneTakerName.innerHTML = element["name"];
          document.getElementById(laneId).appendChild(laneTakerName);

          racers.forEach((object) => {
            object.progress = 0;
            object.lane = laneId;
          });
        }
      }
    });
    //*************************************************************
    //makes the frogs race
    //*************************************************************************
    let ranking = []; //array for rankingcv
    let madeItCount = 0; //counts how many made it to the finish
    const racingFrog = (racer, index) => {
      const hop = setInterval(() => {
        const hopLength = Math.floor(Math.random() * 50);
        racer["progress"] = hopLength + racer["progress"];
        const laneTaker = document.getElementById("lane-number-" + (index + 1));
        if (racer["progress"] >= 100) {
          racer["progress"] = 100;
          laneTaker.style.left = `${racer["progress"]}%`;
          ranking.push(racer["name"]);
          madeItCount++;
          if (madeItCount === 1) {
            document.getElementById(`place-taker-2`).innerHTML =
              "1st place: " + racer["number"] + racer["name"];
            document.getElementById(`place-taker-2`).style.color =
              racer["color"];
          } else if (madeItCount === 2) {
            document.getElementById(`place-taker-1`).innerHTML =
              "2nd place: " + racer["number"] + racer["name"];
            document.getElementById(`place-taker-1`).style.color =
              racer["color"];
          } else if (madeItCount === 3) {
            document.getElementById(`place-taker-3`).innerHTML =
              "3rd place: " + racer["number"] + racer["name"];
            document.getElementById(`place-taker-3`).style.color =
              racer["color"];
            console.log(
              document.getElementById(`place-taker-2`).innerHTML.slice(13) +
                bet.name
            );
            if (
              document
                .getElementById(`place-taker-2`)
                .innerHTML.includes(bet.name)
            ) {
              setResult("You Win!");
            } else {
              setResult("You Lose!");
            }
          }
          clearInterval(hop);
        } else if (racer["progress"] < 100) {
          laneTaker.style.left = `${racer["progress"]}%`;
        }
      }, Math.random() * (5000 - 1000) + 1000);
    };
    if (gameStarted) {
      racers.forEach((racer, index) => racingFrog(racer, index));
    }
  }, [gameStarted, racers, bet]); // Run this effect only once when the component mounts
  const startGame = () => {
    setGameStarted(true);
  };
  const playGame = () => {
    animateToShowProject(setShowGame, showGame, domTwoRef);
  };
  return (
    <Wrapper id="section-7" ref={domTwoRef}>
      <Title theme={theme} $showgame={showGame.toString()}>
        The DOM 2, Frog Race Time!{" "}
        {!isMobile && (
          <Play
            theme={theme}
            ref={(el) => (buttonRef = el)}
            onMouseEnter={() => {
              animateButton(lineLeft, lineRight, lineTop, buttonRef);
            }}
            onMouseLeave={() => {
              unanimateButton(lineLeft, lineRight, lineTop, buttonRef);
            }}
            onClick={() => {
              playGame();
            }}
          >
            {showGame ? "Back To Instructions" : "Play Frog Race"}
            <Line ref={(el) => (lineTop = el)} theme={theme} />
            <Line ref={(el) => (lineLeft = el)} theme={theme} />
            <Line ref={(el) => (lineRight = el)} theme={theme} />
          </Play>
        )}
      </Title>
      {showGame ? (
        <Container>
          <TopWrapper>
            <Instructions theme={theme}>
              {!gameStarted ? "Place your bet!" : "Good Luck!"}
            </Instructions>
            {!gameStarted && (
              <Start
                onClick={() => {
                  startGame();
                }}
                disabled={bet === null}
              >
                Start
              </Start>
            )}
            {gameStarted && <Start onClick={() => reset()}>Reset</Start>}

            <MoreInfo
              theme={theme}
              onClick={() => {
                handleOpenInstriuctions();
              }}
            />
          </TopWrapper>
          {racers && (
            <Bets>
              {bet === null ? (
                racers.map((racer) => (
                  <Racer
                    key={racer.number}
                    style={{ background: racer.color }}
                    onClick={() => setBet(racer)}
                  >
                    {racer.name + " " + racer.number}
                  </Racer>
                ))
              ) : (
                <Racer
                  key={bet.name}
                  onClick={() => {
                    if (gameStarted) return;
                    setBet(null);
                  }}
                >
                  {bet.name + " " + bet.number}
                </Racer>
              )}
            </Bets>
          )}
          <div className="place-takers">
            <span id="place-taker-2"></span>
            <span id="place-taker-1"></span>
            <span id="place-taker-3"></span>
          </div>
          <div>
            <StyledTippy ref={tippyRef}>
              Click on one of the frog names to place your bet, then start the
              game and watch (or cheer, no shame in that). <br />
            </StyledTippy>
            <ol id="track" className="track">
              <li id="lane-1">
                <span className="laneNumber">1</span>
                <span id="lane-name-1"></span>
                <span id="lane-number-1"></span>
                <img
                  className="finishLine"
                  alt="Checkered Finish Line"
                  src={finishLine}
                ></img>
              </li>
              <li id="lane-2">
                <span className="laneNumber">2</span>
                <span id="lane-name-2"></span>
                <span id="lane-number-2"></span>
                <img
                  className="finishLine"
                  alt="Checkered Finish Line"
                  src={finishLine}
                ></img>
              </li>
              <li id="lane-3">
                <span className="laneNumber">3</span>

                <span id="lane-name-3"></span>
                <span id="lane-number-3"></span>

                <img
                  className="finishLine"
                  alt="Checkered Finish Line"
                  src={finishLine}
                ></img>
              </li>
            </ol>
          </div>
          {result && <Results>{result}</Results>}
        </Container>
      ) : (
        <>
          <InfoWrapper theme={theme}>
            <List theme={theme}>
              <li>Randomly select 3 out of 5 frogs (given array)</li>
              <li>
                Place frogs in respective lanes and apply styling (get
                properties from frog objects)
              </li>
              <li>Make the frogs race! random hop length and hop intervals</li>
            </List>
          </InfoWrapper>
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br />
            SetInterval Randomness and racing frogs
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 85%;
  font-size: 1.5rem;
  border-top: 3px solid #50196f;
  color: black;
  line-height: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  top: 5%;

  ${({ theme }) => theme === "dark" && `color: white;`};
  @media (max-width: 1000px) {
    font-size: 1.2rem;
    border: 3px solid #50196f;
    border-radius: 20px;
    margin-bottom: 10%;
    width: 100%;
  }
`;
const Start = styled.button`
  background-color: #50196f;
  border: none;
  color: white;
  padding: 1%;
  font-size: 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
  @media (max-width: 1000px) {
    padding: 2%;
  }
`;
const Bets = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  @media (max-width: 1000px) {
    width: 80vw;
  }
`;
const Racer = styled.div`
  margin: 1%;
  padding: 1%;
  width: 33%;
  border-radius: 10px;
  background-color: green;
  color: white;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bolder;
  cursor: pointer;
`;
const Instructions = styled.p`
  width: 30%;
  font-size: 1.4rem;
  font-weight: bolder;
  ${({ theme }) => theme === "dark" && `color: white;`};
  @media (max-width: 1000px) {
    display: none;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50vw;
  background-color: darkgreen;
  border-radius: 10px;
  color: white;
  margin-top: 20px;
  height: 8vh;
  @media (max-width: 1000px) {
    margin: 0;
    width: 100%;
    border-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    align-items: center;
    height: 6vh;
  }
`;

const Results = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  font-size: 5rem;
  font-weight: bolder;
  color: white;
  border-radius: 10px;
  background-color: darkgreen;
  z-index: 100;
`;
const MoreInfo = styled(FaQuestionCircle)`
  font-size: 3rem;
  width: 30%;
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: grey;
  }
  ${({ theme }) => theme === "dark" && `color: rgba(255,255,255,0.4);`};
  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }
`;
const StyledTippy = styled.p`
  background-color: darkgrey;
  color: white;
  border-radius: 10px;
  font-size: 1.3rem;
  font-family: "Roboto", sans-serif;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 8vh;
  height: 10vh;
  width: calc(50vw - 100px);
  left: 50%;
  transform: translateX(-50%);
  padding: 20px 50px 20px 50px;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  z-index: -1;
  @media (max-width: 1000px) {
    width: 90%;
    padding: 30px 30px;
    top: 60%;
  }
`;

export const Play = styled.button`
  background-color: transparent;
  position: relative;
  color: ${(props) => (props.theme === "light" ? "#50196f" : "#a742bc")};
  font-weight: 700;
  font-size: 1.5rem;
  border: ${(props) =>
    props.theme === "light" ? "2px solid black" : "2px solid #a742bc"};
  padding: 1% 1.5%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  transition: 0.2s ease-in-out;
  cursor: pointer;
  border-radius: 10px;
`;
export const List = styled.ul`
  ${({ theme }) => theme === "dark" && `color: white;`};
  font-size: 1.5rem;
  width: 95%;
  @media (max-width: 800px) {
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 30px;
  height: 4px;
  background-color: ${(props) =>
    props.theme === "light" ? "#50196f" : "#a742bc"};
  border-radius: 10px;
  z-index: 100;
  transition: 0.2s ease-in-out;
  &:nth-child(1) {
    top: -30px;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
  }
  &:nth-child(2) {
    left: -60px;
    top: 50%;
    transform: translateY(-50%);
  }
  &:nth-child(3) {
    right: -60px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  width: 90%;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 1%;
  color: #50196f;
  position: relative;
  ${({ theme }) => theme === "dark" && `color: #a742bc;`};
  top: ${(props) => (props.$showgame === "false" ? "0" : "5%")};
  @media (max-width: 800px) {
    text-align: center;
  }
`;

export default TheDomPartTwo;
