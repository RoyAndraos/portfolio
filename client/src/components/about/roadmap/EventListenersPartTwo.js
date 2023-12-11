import { Wrapper, Title, Unlocked } from "./HTMLFundamentals";
import "../../../assets/form.css";
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../contexts/ColorTheme";
import { Play } from "./TheDomPartTwo";
import { animateToShowProject } from "../../../helpers";
import { InfoWrapper } from "./ReactFetch";
const EventListenersPartTwo = ({ eventTwoRef }) => {
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    //submit n clear buttons for event listeners
    const submit = document.getElementById("submit");
    const clear = document.getElementById("clear");
    //error parag
    const error = document.getElementById("error");
    const styleErrorForError = () => {
      error.style.width = "100%";
      error.style.marginBottom = "20px";
      error.style.textAlign = "center";
      error.style.borderRadius = "5px";
      error.style.fontSize = "1.2rem";
      error.style.fontWeight = "bold";
      error.style.backgroundColor = "#f78282";
      error.style.color = "white";
      error.style.padding = "0 10px";
    };
    const styleErrorForSuccess = () => {
      error.style.backgroundColor = "darkgreen";
      error.style.color = "white";
    };
    //checkobx for if checked or not
    const checkboxInput = document.getElementById("checkboxInput");
    //input selector for clear
    const fullName = document.getElementById("fullName");
    const streetAddress = document.getElementById("streetAddress");
    const emailAddress = document.getElementById("emailAddress");
    const phoneNumber = document.getElementById("phoneNumber");
    const password = document.getElementById("passwordInput");
    const confirmPass = document.getElementById("confirmInput");
    // array of words for pass suggestions nd empty array to fill with picks from words[]
    let words = [
      "manner",
      "offend",
      "glimpse",
      "enlarge",
      "difficult",
      "virtue",
      "mass",
      "tourist",
      "fountain",
      "love",
      "extend",
      "wealth",
      "pedestrian",
      "rocket",
      "free",
      "philosophy",
      "curl",
      "make",
      "wood",
      "invite",
      "plant",
      "embox",
      "worry",
      "credibility",
      "stick",
      "term",
      "wild",
      "balance",
      "referral",
      "acid",
      "turn",
      "precision",
      "tempt",
      "correspond",
      "front",
      "strategic",
      "notebook",
      "peepee",
      "terms",
      "shake",
    ];
    // submit event listener
    submit &&
      submit.addEventListener("click", (event) => {
        event.preventDefault();
        const password = document.getElementById("passwordInput");
        const confirmPass = document.getElementById("confirmInput");
        const passArray = password.value.split("");
        const confirmPassArray = confirmPass.value.split("");
        const clearErrors = (element) => {
          element.style.border = "1px darkgray solid";
          element.style.outline = "none";
        };
        const equals = (a, b) => {
          return (
            Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index])
          );
        };
        if (
          fullName.value === "" ||
          streetAddress.value === "" ||
          emailAddress.value === "" ||
          phoneNumber.value === ""
        ) {
          setError("Please fill out all fields!");
          styleErrorForError();
          if (fullName.value === "") {
            clearErrors(fullName);
            clearErrors(streetAddress);
            clearErrors(emailAddress);
            clearErrors(phoneNumber);
            fullName.focus();
            fullName.style.border = "2px solid #c4609c";
            fullName.style.outline = "2px solid rgb(0, 157, 255)";
          } else if (streetAddress.value === "") {
            clearErrors(fullName);
            clearErrors(streetAddress);
            clearErrors(emailAddress);
            clearErrors(phoneNumber);
            streetAddress.focus();
            streetAddress.style.border = "2px solid #c4609c";
            streetAddress.style.outline = "2px solid rgb(0, 157, 255)";
          } else if (emailAddress.value === "") {
            clearErrors(fullName);
            clearErrors(streetAddress);
            clearErrors(emailAddress);
            clearErrors(phoneNumber);
            emailAddress.focus();
            emailAddress.style.border = "2px solid #c4609c";
            emailAddress.style.outline = "2px solid rgb(0, 157, 255)";
          } else if (phoneNumber.value === "") {
            clearErrors(phoneNumber);
            clearErrors(fullName);
            clearErrors(streetAddress);
            clearErrors(emailAddress);
            clearErrors(phoneNumber);
            phoneNumber.focus();
            phoneNumber.style.border = "2px solid #c4609c";
            phoneNumber.style.outline = "2px solid rgb(0, 157, 255)";
          }
        } else {
          if (checkboxInput.checked) {
            if (password.value === "") {
              clearErrors(phoneNumber);
              clearErrors(fullName);
              clearErrors(streetAddress);
              clearErrors(emailAddress);
              clearErrors(phoneNumber);
              setError("Please enter a password!");
              styleErrorForError();
              password.focus();
              password.style.border = "2px solid #c4609c";
              password.style.outline = "2px solid rgb(0, 157, 255)";
            } else {
              if (password.value.length < 10) {
                const suggestion = () => {
                  let pickedArray = [];
                  const wordsCopy = [...words];
                  let dashedElemets = [];
                  for (let i = 0; i < 4; i++) {
                    const a = Math.floor(
                      (Math.random() * wordsCopy.length) | 0
                    );
                    pickedArray.push(wordsCopy[a]);
                    wordsCopy.splice(wordsCopy[a - 1], 1);
                    if (i === 2) {
                      dashedElemets = pickedArray.map(
                        (element) => element + "-"
                      );
                    }
                    if (i === 3) {
                      dashedElemets.push(wordsCopy[a]);
                    }
                  }
                  const suggestedPass = dashedElemets.join("");
                  return suggestedPass;
                };
                const suggestionWord = suggestion();
                setError(
                  `Your password is too short! How about ${suggestionWord}?`
                );
                styleErrorForError();
                password.focus();
                password.style.border = "2px solid #c4609c";
                password.style.outline = "2px solid rgb(0, 157, 255)";
              } else {
                setError("");
                clearErrors(password);
                clearErrors(phoneNumber);
                clearErrors(fullName);
                clearErrors(streetAddress);
                clearErrors(emailAddress);
                clearErrors(phoneNumber);
                if (equals(passArray, confirmPassArray)) {
                  clearErrors(confirmPass);
                  clearErrors(phoneNumber);
                  clearErrors(fullName);
                  clearErrors(streetAddress);
                  clearErrors(emailAddress);
                  clearErrors(phoneNumber);
                  setError("Your form has been submitted!");
                  styleErrorForSuccess();
                } else {
                  confirmPass.focus();
                  setError("Your passwords do not match!");
                  styleErrorForError();
                  confirmPass.style.border = "2px solid #c4609c";
                  confirmPass.style.outline = "2px solid rgb(0, 157, 255)";
                }
              }
            }
          } else {
            setError("Please agree to the terms of service!");
            styleErrorForError();
            checkboxInput.focus();
            checkboxInput.style.border = "2px solid #c4609c";
            checkboxInput.style.outline = "2px solid rgb(0, 157, 255)";
          }
        }
      });
    //clear eventlistener
    clear &&
      clear.addEventListener("click", (event) => {
        event.preventDefault();
        fullName.value = "";
        streetAddress.value = "";
        emailAddress.value = "";
        phoneNumber.value = "";
        password.value = "";
        confirmPass.value = "";
      });
  }, [showForm]);
  const tryForm = () => {
    animateToShowProject(setShowForm, showForm, eventTwoRef);
  };
  return (
    <Wrapper id="section-9" ref={eventTwoRef}>
      <Title
        theme={theme}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          width: "90%",
          transform: "translateX(35%)",
        }}
      >
        Event Listeners 2, Form Validation{" "}
        <Play
          onClick={() => {
            tryForm();
          }}
        >
          {showForm ? "Back To Instructions" : "Try The Form"}
        </Play>
      </Title>
      {showForm ? (
        <Container theme={theme}>
          <form className="form">
            <h1 id="form-title">Signup Form</h1>
            <div>
              <div className="labelInputWrapper">
                <label className="label">Full name</label>
                <input
                  type=""
                  htmlFor="name"
                  required
                  id="fullName"
                  autoComplete="name"
                  className="textInput"
                  placeholder="John Doe"
                />
              </div>
              <div className="labelInputWrapper">
                <label className="label">Street address</label>
                <input
                  type=""
                  htmlFor="street address"
                  required
                  id="streetAddress"
                  autoComplete="street-address"
                  className="textInput"
                  placeholder="1234 edward st"
                />
              </div>
              <div className="labelInputWrapper">
                <label className="label">Email address</label>
                <input
                  type="email"
                  htmlFor="email"
                  required
                  id="emailAddress"
                  autoComplete="email"
                  className="textInput"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="labelInputWrapper">
                <label className="label">Phone number</label>
                <input
                  type=""
                  htmlFor="phone number"
                  required
                  id="phoneNumber"
                  autoComplete="tel"
                  className="textInput"
                  placeholder="123-456-7890"
                />
              </div>
              <div className="labelInputWrapper">
                <label className="label" id="passwordLabel">
                  Password
                </label>
                <input
                  type="password"
                  htmlFor="password"
                  id="passwordInput"
                  required
                  autoComplete="new-password"
                  className="textInput"
                  placeholder="password"
                />
              </div>
              <div className="labelInputWrapper">
                <label className="label" id="confirmLabel">
                  Confirm password
                </label>
                <input
                  type="password"
                  htmlFor="confirm"
                  id="confirmInput"
                  required
                  autoComplete="new-password"
                  className="textInput"
                  placeholder="confrim password"
                />
              </div>
            </div>
            <div className="submitClearTermsWrapper">
              <div id="terms">
                <input type="checkbox" id="checkboxInput" />
                <label className="checkboxLabel">
                  I agree to the <a href="/about">terms of service.</a>
                </label>
              </div>
              <div>
                <p id="error">{error}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <button id="clear">Clear</button>
                <button id="submit">Submit</button>
              </div>
            </div>
          </form>
        </Container>
      ) : (
        <>
          <InfoWrapper theme={theme} style={{ padding: "3%" }}>
            <Unlocked theme={theme}>Code Info:</Unlocked> <br />
            Make use of the addEventListener() method to make a form validation.
            <ul>
              <li>Make sure all fields are filled out</li>
              <li>
                Make sure the password is at least 10 characters long and that
                the passwords match
              </li>
              <li>
                {" "}
                Make sure the user agrees to the terms of service(stretch: If
                the password is too short, suggest a password)
              </li>
            </ul>
          </InfoWrapper>
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br />I can now validate forms.
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

  ${({ theme }) => theme === "dark" && `color: white;`};
  @media (max-width: 1000px) {
    font-size: 1.2rem;
    border: 3px solid #50196f;
    border-radius: 20px;
    margin-bottom: 10%;
    width: 85%;
  }
`;
const Acheivement = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  color: black;
  margin: 0;
  margin-top: 3%;
  padding: 3% 3%;
  border-left: 3px solid #50196f;
  border-top: 3px solid #50196f;
  border-top-left-radius: 20px;
  ${({ theme }) => theme === "dark" && `color: white;`};
  font-weight: 700;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export default EventListenersPartTwo;
