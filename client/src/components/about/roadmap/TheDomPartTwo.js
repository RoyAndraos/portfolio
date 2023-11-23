import { useContext, useEffect, useState, useRef } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import { Wrapper, Title, Acheivement, Unlocked } from "./HTMLFundamentals";
import "../../../assets/frogRace.css";
import finishLine from "../../../assets/finshline.jpg";
import styled from "styled-components";
import { selectRandomFrogs, frogStable } from "../../../helpers";
import { FaQuestionCircle } from "react-icons/fa";
import gsap from "gsap";
import { TimelineLite, Power4 } from "gsap/gsap-core";
const TheDomPartTwo = ({ domTwoRef }) => {
  const { theme } = useContext(ThemeContext);
  const [gameStarted, setGameStarted] = useState(false);
  const [racers, setRacers] = useState(selectRandomFrogs(frogStable));
  const [bet, setBet] = useState(null);
  const [result, setResult] = useState(null);
  const tippyRef = useRef(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const handleOpenInstriuctions = () => {
    gsap.registerPlugin();
    const tl = new TimelineLite();
    if (showInstructions) {
      setShowInstructions(false);
      tl.to(tippyRef.current, {
        opacity: 0,
        zIndex: -1,
        duration: 0.2,
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
  return (
    <Wrapper id="section-7" ref={domTwoRef} style={{ top: "5vh" }}>
      <Title theme={theme}>The DOM 2, Frog Race Time!</Title>
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
              Start Race
            </Start>
          )}
          {gameStarted && <Start onClick={() => reset()}>Reset</Start>}

          <div
            style={{ marginLeft: "20px" }}
            onClick={() => {
              handleOpenInstriuctions();
            }}
          >
            <MoreInfo theme={theme} />
          </div>
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
            Click on one of the frogs to place your bet, then start the game and
            watch (or cheer, no shame in that). <br />
            Code Instructions: <br />
            1-Take the given array of frogs and randomly select 3 of the 5
            objects given. <br />
            2-Place the selected frogs in their lanes, styling the lane with the
            object's properties (color: frogColor, number: frogNumber and name).
            <br />
            3-Make the frogs race: random hopLengths and random intervals(frog
            might take up to 4 seconds to decide to jump again... frogs...).{" "}
            <br />
          </StyledTippy>
          <ol id="track" className="track">
            <li id="lane-1">
              <span>1</span>
              <span id="lane-name-1"></span>
              <span id="lane-number-1"></span>
              <img
                className="finishLine"
                alt="Checkered Finish Line"
                src={finishLine}
              ></img>
            </li>
            <li id="lane-2">
              <span>2</span>
              <span id="lane-name-2"></span>
              <span id="lane-number-2"></span>
              <img
                className="finishLine"
                alt="Checkered Finish Line"
                src={finishLine}
              ></img>
            </li>
            <li id="lane-3">
              <span>3</span>

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
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />
        Gambling addiction.
      </Acheivement>
    </Wrapper>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  border-top: 3px solid #50196f;
  border-right: 3px solid #50196f;
  border-top-right-radius: 20px;
  color: black;
  line-height: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme === "dark" && `color: white;`};
  @media (max-width: 1000px) {
    font-size: 1.2rem;
    border: 3px solid #50196f;
    border-radius: 20px;
    margin-bottom: 10%;
    width: 85%;
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
  font-size: 1.4rem;
  font-weight: bolder;
  margin: 1%;
  padding: 1%;
  text-align: center;
  ${({ theme }) => theme === "dark" && `color: white;`};
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  margin-top: 20px;
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
  font-size: 3.5rem;
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: grey;
  }
  ${({ theme }) => theme === "dark" && `color: rgba(255,255,255,0.4);`};
`;
const StyledTippy = styled.p`
  background-color: darkgrey;
  color: white;
  border-radius: 10px;
  font-size: 1.3rem;
  font-family: "Roboto", sans-serif;
  position: absolute;
  width: 70%;
  top: 15%;
  left: 15%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
export default TheDomPartTwo;
