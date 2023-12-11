import styled from "styled-components";

const TheWord = ({ array }) => {
  return (
    <Wrapper>
      {array.map((element, idx) => {
        if (element === "") {
          return <Span line={"true"} key={idx} />;
        } else {
          return (
            <Span line={"false"} key={idx}>
              {element}
            </Span>
          );
        }
      })}
    </Wrapper>
  );
};

const Wrapper = styled.p`
  font-size: 30px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  width: 80%;
`;
const Span = styled.span`
  display: block;
  border-bottom: ${(props) =>
    props.line === "true" ? "2px solid white" : "none"};
  width: 30px;
  margin: 0 3px;
  text-align: center;
`;

export default TheWord;
