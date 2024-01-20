import styled from "styled-components";
import { useEffect, useState } from "react";
import cookieSrc from "../../../../assets/cookie.svg";
import Item from "./Item";
import useInterval from "./hooks/use-interval";

export const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];

const Game = () => {
  const [numCookies, setNumCookies] = useState(100);
  const [purchasedItems, setPurchasedItems] = useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });
  const [cookiesPerTick, setCookiesPerTick] = useState(0);

  const handleKeydown = (ev) => {
    if (ev.code === "Space") {
      setNumCookies(numCookies + 1);
    }
  };

  useInterval(() => {
    setNumCookies(cookiesPerTick + numCookies);
  }, 1000);

  useEffect(() => {
    const Button = document.getElementById("Button");
    if (Button !== document.activeElement) {
      window.addEventListener("keyup", handleKeydown);
    }
    return () => {
      window.removeEventListener("keyup", handleKeydown);
    };
  });
  const calculateCookiesPerTick = (boughtItem) => {
    setCookiesPerTick((prev) => prev + boughtItem.value);
    return cookiesPerTick;
  };

  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          <BoldSpan>{cookiesPerTick}</BoldSpan> cookies per second
        </Indicator>
        <Button
          id="Button"
          onClick={() => {
            setNumCookies(numCookies + 1);
          }}
        >
          <Cookie src={cookieSrc} alt="cookie" />
        </Button>
      </GameArea>
      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        {items.map((element) => {
          return (
            <Item
              key={element.id}
              name={element.name}
              value={element.value}
              numOwned={purchasedItems[element.id]}
              cost={element.cost}
              handleClick={() => {
                if (numCookies < element.cost) {
                  window.alert("not enough Cookies");
                } else {
                  setNumCookies(numCookies - element.cost);
                  setPurchasedItems({
                    ...purchasedItems,
                    [element.id]: purchasedItems[element.id] + 1,
                  });
                }
                calculateCookiesPerTick(element);
              }}
            />
          );
        })}
      </ItemArea>
    </Wrapper>
  );
};

const BoldSpan = styled.span`
  font-weight: bold;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #262829;
  z-index: 1;
`;
const GameArea = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Cookie = styled.img`
  width: 200px;
`;

const ItemArea = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  color: yellow;
`;

const Indicator = styled.div`
  position: absolute;
  width: 250px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  color: white;
`;

const Total = styled.h3`
  font-size: 28px;
  color: lime;
`;

export default Game;
