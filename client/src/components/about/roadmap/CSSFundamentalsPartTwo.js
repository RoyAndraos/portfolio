import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import {
  Wrapper,
  Title,
  Info,
  Acheivement,
  Unlocked,
} from "./HTMLFundamentals";
const CSSFundamentalPartTwo = ({ cssTwoRef }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="section-5" ref={cssTwoRef}>
      <Title theme={theme}>CSS Fundamentals 2</Title>
      <Info theme={theme}>
        The nightmare of some developers, the box model. I learned about the
        different properties that make up the box model, such as margin, border,
        padding, and content. With that, I also learned about flexbox, and
        styled my first navigation bar.
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br /> I now understand the box model and flexbox.
      </Acheivement>
    </Wrapper>
  );
};

export default CSSFundamentalPartTwo;
