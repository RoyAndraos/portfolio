import { Unlocked, Wrapper, Acheivement } from "./HTMLFundamentals";
import {
  animateToShowProject,
  animateButton,
  unanimateButton,
} from "../../../helpers";
import ThemeContext from "../../contexts/ColorTheme";
import { useCallback, useContext, useEffect, useState, useRef } from "react";
import { Title, List, Play, Line } from "./TheDomPartTwo";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import "./nodeInto/_chat-app.css";
import styled from "styled-components";

const NodeIntro = ({ nodeIntroRef, isMobile }) => {
  const [showProj, setShowProj] = useState(false);
  const { theme } = useContext(ThemeContext);
  const messageInput = useRef(document.querySelector("#user-input"));
  const conversationElem = useRef(
    document.querySelector("#conversation-container")
  );
  let lineTop = useRef(null);
  let lineLeft = useRef(null);
  let lineRight = useRef(null);
  let buttonRef = useRef(null);

  const handleFocus = useCallback(() => {
    messageInput.current = document.querySelector("#user-input");
    conversationElem.current = document.querySelector(
      "#conversation-container"
    );
    messageInput.current.focus();
  }, [messageInput]);
  useEffect(() => {
    if (showProj) {
      handleFocus();
    }
  }, [showProj, handleFocus]);
  // focus the input on load

  // updateConversation expects an object with 'user' and 'text'
  const updateConversation = (message) => {
    const { author, text } = message;
    const messageElem = document.createElement("p");

    messageElem.classList.add("message", author);
    messageElem.innerHTML = `<span>${text}</span>`;
    conversationElem.current.appendChild(messageElem);
    conversationElem.current.scrollTop = conversationElem.current.scrollHeight;

    if (author === "user") messageInput.current.value = "";
    handleFocus();
  };

  const sendMessage = (event) => {
    event.preventDefault();

    const message = { author: "user", text: messageInput.current.value };
    updateConversation(message);

    fetch(
      `https://roy-portfolio-server.onrender.com/bot-message/?textContent=${message.text}`
    )
      .then((res) => res.json())
      .then((data) => {
        updateConversation(data.message);
      });
  };

  return (
    <Wrapper id="section-20" ref={nodeIntroRef}>
      {showProj ? (
        <ChatBody>
          <Title
            theme={theme}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "baseline",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "999",
              color: "#a742bc",
              backgroundColor: "rgba(255,255,255,0.8)",
              padding: "30px",
            }}
          >
            Node Introduction
            <Play
              style={{ marginLeft: "30px" }}
              onClick={() => {
                animateToShowProject(setShowProj, showProj, nodeIntroRef);
              }}
            >
              Back To Instructions
            </Play>
          </Title>
          <div className="chat-app">
            <div className="chat-app__header">
              <h2>Bot Chat</h2>
            </div>
            <div className="chat-app__content">
              <form
                className="user-form"
                onSubmit={(event) => {
                  sendMessage(event);
                }}
              >
                <label htmlFor="user-input" className="user-form--label">
                  Message the bot
                </label>
                <input
                  name="user-input"
                  id="user-input"
                  className="user-form--input"
                  placeholder="Type your message"
                />
                <button className="user-form--button">Send</button>
              </form>
              <div className="conversation">
                <div
                  id="conversation-container"
                  className="conversation-container"
                ></div>
              </div>
            </div>
          </div>
        </ChatBody>
      ) : (
        <>
          <Title theme={theme} $showgame={"false"}>
            Node.js Introduction
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
                  animateToShowProject(setShowProj, showProj, nodeIntroRef);
                }}
              >
                Try Chat Bot
                <Line ref={(el) => (lineTop = el)} theme={theme} />
                <Line ref={(el) => (lineLeft = el)} theme={theme} />
                <Line ref={(el) => (lineRight = el)} theme={theme} />
              </Play>
            )}
          </Title>
          <InfoWrapper theme={theme}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "flex-start",
                width: "100%",
              }}
            >
              <ContentWrapper $isMobile={!isMobile.toString()}>
                {!isMobile && (
                  <Unlocked
                    theme={theme}
                    style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                  >
                    Code Instructions
                  </Unlocked>
                )}
                <List theme={theme}>
                  <em>Build the get() method</em>
                  <li>
                    the method should respond with the user's message plus a
                    Bzzt at the beginning.
                  </li>
                  <li>Make a setTimeout to make the chat realistic</li>
                </List>
              </ContentWrapper>
              {!isMobile && (
                <ContentWrapper>
                  <Unlocked
                    theme={theme}
                    style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                  >
                    Given
                  </Unlocked>
                  <List theme={theme}>
                    <li>Html form </li>
                    <li>Css file</li>{" "}
                  </List>
                </ContentWrapper>
              )}
            </div>
            <Unlocked
              theme={theme}
              style={{ fontSize: "1.3rem", width: "100%" }}
            >
              Stretch: User should be able to ask for a joke; send "joke" as a
              message to the bot.
            </Unlocked>
          </InfoWrapper>
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br /> GET 200
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

const ChatBody = styled.div`
  background: url("/nodeIntro/bot_bg.jpg") no-repeat left center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
`;

export default NodeIntro;
