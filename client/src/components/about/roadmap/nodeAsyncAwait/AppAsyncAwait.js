import styled from "styled-components";
import { useState } from "react";
const AppAsyncAwait = () => {
  const [joke, setJoke] = useState("");
  const [jokeType, setJokeType] = useState("dad");
  const handleGetJoke = () => {
    fetch(`https://roy-portfolio-server.onrender.com/joke/${jokeType}`)
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
      });
  };
  return (
    <Wrapper>
      <TypeWrapper>
        <JokeTypeButton
          className={jokeType === "dad" ? "active" : ""}
          onClick={() => {
            setJokeType("dad");
          }}
        >
          Dad Joke
        </JokeTypeButton>
        <JokeTypeButton
          className={jokeType === "pun" ? "active" : ""}
          onClick={() => {
            setJokeType("pun");
          }}
        >
          Pun
        </JokeTypeButton>
        <JokeTypeButton
          className={jokeType === "geek" ? "active" : ""}
          onClick={() => {
            setJokeType("geek");
          }}
        >
          Geek Joke
        </JokeTypeButton>
      </TypeWrapper>
      <GetJoke onClick={() => handleGetJoke()}>Get Joke</GetJoke>
      <Joke>{joke ? joke.joke : ""}</Joke>
      <BackgroundImage src="https://psycatgames.com/magazine/conversation-starters/interesting-questions/feature-image_hu3e669e13f746923877b550205503bffc_286313_1200x1200_fill_q100_box_smart1.jpg" />
    </Wrapper>
  );
};
const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(10px);
  z-index: -1;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 900;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TypeWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;
const JokeTypeButton = styled.button`
  background-color: #50196f;
  width: 30%;
  border: none;
  color: white;
  font-size: 1.5rem;
  padding: 10px;
  margin: 10px;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #a742bc;
  }
  &.active {
    background-color: black;
  }
`;
const Joke = styled.div`
  font-size: 2rem;
  width: 50%;
  height: 30%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  padding: 0 30px;
  color: white;
`;
const GetJoke = styled.button`
  background-color: #a742bc;
  width: 30%;
  border: none;
  color: white;
  font-size: 1.5rem;
  padding: 10px;
  margin: 10px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: black;
    width: 10%;
  }
`;
export default AppAsyncAwait;
