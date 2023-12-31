import styled from "styled-components";
import { colors } from "./GlobalStyles";
const DeadMan = ({ wrongGuesses }) => {
  return (
    <SVG bodyparts={wrongGuesses.length}>
      {/* Structure */}
      <line
        x1="60"
        y1="20"
        x2="200"
        y2="20"
        style={{ stroke: `${colors.yellow}` }}
      />
      <line
        x1="200"
        y1="20"
        x2="200"
        y2="70"
        style={{ stroke: `${colors.yellow}` }}
      />
      <line
        x1="60"
        y1="20"
        x2="60"
        y2="400"
        style={{ stroke: `${colors.yellow}` }}
      />
      <line
        x1="60"
        y1="397"
        x2="300"
        y2="397"
        style={{ stroke: `${colors.yellow}` }}
      />
      {/* head */}
      <circle cx="200" cy="115" r="45" className="head" />
      {/* body */}
      <line x1="200" y1="160" x2="200" y2="260" className="body" />
      {/* Arms */}
      <line x1="200" y1="200" x2="120" y2="120" className="left-arm" />
      <line x1="200" y1="200" x2="280" y2="120" className="right-arm" />
      {/* Legs */}
      <line x1="200" y1="260" x2="120" y2="350" className="left-leg" />
      <line x1="200" y1="260" x2="280" y2="350" className="right-leg" />
      {/* hands */}
      <circle cx="113" cy="111" r="10" className="left-hand" />
      <circle cx="285" cy="111" r="10" className="right-hand" />
      {/* feet */}
      <ellipse cx="112" cy="338" rx="10" ry="18" className="left-foot" />
      <ellipse cx="288" cy="338" rx="10" ry="18" className="right-foot" />
    </SVG>
  );
};

const SVG = styled.svg`
  height: 400px;
  width: 320px;
  fill: transparent;
  stroke-width: 4px;
  stroke-linecap: round;
  .head {
    stroke: ${({ bodyparts }) =>
      bodyparts >= 1 ? colors.yellow : "transparent"};
  }
  .body {
    stroke: ${({ bodyparts }) =>
      bodyparts >= 2 ? colors.yellow : "transparent"};
  }
  .left-arm {
    stroke: ${({ bodyparts }) =>
      bodyparts >= 3 ? colors.yellow : "transparent"};
  }
  .right-arm {
    stroke: ${({ bodyparts }) =>
      bodyparts >= 4 ? colors.yellow : "transparent"};
  }
  .left-leg {
    stroke: ${({ bodyparts }) =>
      bodyparts >= 7 ? colors.yellow : "transparent"};
  }
  .right-leg {
    stroke: ${({ bodyparts }) =>
      bodyparts >= 8 ? colors.yellow : "transparent"};
  }
  .left-hand {
    stroke: ${({ bodyparts }) =>
      bodyparts >= 5 ? colors.yellow : "transparent"};
  }
  .right-hand {
    stroke: ${({ bodyparts }) =>
      bodyparts >= 6 ? colors.yellow : "transparent"};
  }
  .left-foot {
    stroke: ${({ bodyparts }) =>
      bodyparts >= 9 ? colors.yellow : "transparent"};
  }
  .right-foot {
    stroke: ${({ bodyparts }) =>
      bodyparts >= 10 ? colors.yellow : "transparent"};
  }
`;

export default DeadMan;
