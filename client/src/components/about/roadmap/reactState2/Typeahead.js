import React, { useState } from "react";
import styled from "styled-components";
import { categories } from "./data";

const Typeahead = ({ suggestions, handleSelect, setSuggestion }) => {
  const [selectedSuggestionIndex, setSelectedSuggestions] = useState(0);
  const [entered, setEntered] = useState("");
  let matchedSuggestions = [];
  if (entered.split("").length > 1) {
    suggestions.forEach((element) => {
      if (element.title.toLowerCase().includes(entered.toLowerCase())) {
        matchedSuggestions.push({
          title: element.title,
          id: element.id,
          categoryId: element.categoryId,
          isSelected: false,
        });
      }
    });
  }
  const SuggestionList = () => {
    return (
      <StyledUl>
        {matchedSuggestions.map((element) => {
          const categoryName = categories[`${element.categoryId}`].name;
          const firstHalf = element.title
            .split("")
            .slice(
              0,
              element.title.toLowerCase().indexOf(entered.toLowerCase()) +
                entered.length
            );
          const secondHalf = element.title
            .split("")
            .slice(
              element.title.toLowerCase().indexOf(entered.toLowerCase()) +
                entered.length,
              element.title.length
            );
          if (matchedSuggestions.indexOf(element) === selectedSuggestionIndex) {
            element.isSelected = true;
          }
          return (
            <Suggestion
              key={element.id}
              onClick={() => handleSelect(element.title)}
              style={{
                background: element.isSelected
                  ? "hsla(50deg, 100%, 80%, 0.25)"
                  : "transparent",
              }}
              onMouseEnter={() => {
                setSelectedSuggestions(matchedSuggestions.indexOf(element));
                element.isSelected = true;
              }}
            >
              <span>
                {firstHalf}
                <Prediction>{secondHalf}</Prediction>
                <StyledInSpan> in </StyledInSpan>
                <StyledCategoryName>{categoryName}</StyledCategoryName>
              </span>
            </Suggestion>
          );
        })}
      </StyledUl>
    );
  };
  return (
    <InputButtonWrapper>
      <StyledInput
        type="text"
        value={entered}
        onChange={(ev) => {
          setEntered(ev.target.value);
        }}
        onKeyDown={(ev) => {
          switch (ev.key) {
            case "Enter": {
              handleSelect(ev.target.value);
              break;
            }
            case "ArrowDown": {
              if (matchedSuggestions.length !== 0) {
                if (selectedSuggestionIndex < matchedSuggestions.length - 1) {
                  setSelectedSuggestions(selectedSuggestionIndex + 1);
                } else if (
                  selectedSuggestionIndex >=
                  matchedSuggestions.length - 1
                ) {
                  return;
                }
              }
              break;
            }
            case "ArrowUp": {
              if (matchedSuggestions.length !== 0) {
                if (selectedSuggestionIndex > 0) {
                  setSelectedSuggestions(selectedSuggestionIndex - 1);
                } else if (selectedSuggestionIndex === 0) {
                  return;
                }
              }
              break;
            }
            default: {
              return;
            }
          }
        }}
      ></StyledInput>
      <StyledButton
        onClick={() => {
          setEntered("");
          setSuggestion("");
        }}
      >
        Clear
      </StyledButton>
      {matchedSuggestions.length > 0 && <SuggestionList />}
    </InputButtonWrapper>
  );
};

const StyledButton = styled.button`
  background-color: rgba(43, 0, 215, 0.8);
  border: none;
  color: #fff;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  height: 38px;
  width: 100px;
  font-size: 1.2rem;
  &:focus {
    outline: none;
    border: 2px rgba(43, 0, 215, 0.8) solid;
  }
`;

const StyledInput = styled.input`
  height: 40px;
  width: 300px;
  &:focus {
    border: 2px rgba(43, 0, 215, 0.8) solid;
    border-radius: 3px;
    outline: none;
  }
`;

const Suggestion = styled.li`
  font-size: 15px;
  padding: 7px;
  list-style-type: none;
  color: white;
  border-bottom: 1px solid grey;
  margin-bottom: 20px;
  padding-bottom: 10px;
  &:last-of-type {
    border-bottom: none;
  }
  &:hover {
    cursor: pointer;
    background-color: hsla(50deg, 100%, 80%, 0.25);
  }
`;
const StyledUl = styled.ul`
  width: 390px;
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  padding: 10px;
  border-radius: 6px;
  background-color: black;
`;

const Prediction = styled.span`
  font-weight: bold;
`;

const StyledCategoryName = styled.span`
  color: purple;
  font-style: italic;
  font-size: 13px;
`;

const StyledInSpan = styled.span`
  font-size: 12px;
  font-style: italic;
  opacity: 0.7;
`;

const InputButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  top: 10%;
`;
export default Typeahead;
