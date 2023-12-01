import styled from "styled-components";
import { FiHeart, FiRepeat, FiUpload, FiMessageCircle } from "react-icons/fi";
import { useState } from "react";

const ToolBar = (props) => {
  const [like, setLike] = useState(false);
  const { numLikes } = props;

  return (
    <Wrapper>
      <FiMessageCircle />
      <FiRepeat />
      <Like
        onClick={() => {
          setLike(!like);
        }}
      >
        <StyledFiHeart style={like ? { fill: "red", color: "#8e8e94" } : ""} />
        {numLikes !== 0 && <span>{numLikes}</span>}
      </Like>
      <FiUpload />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 19px;
  display: flex;
  justify-content: space-between;
  bottom: 1vh;
  border-left: 2px rgb(239, 239, 239) solid;
  border-right: 2px rgb(239, 239, 239) solid;
  align-items: center;
  padding: 0 5vw 0 5vw;
`;
const Like = styled.button`
  background-color: transparent;
  border: none;
  font-size: 19px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledFiHeart = styled(FiHeart)`
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export default ToolBar;
