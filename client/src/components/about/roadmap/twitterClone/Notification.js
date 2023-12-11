import styled from "styled-components";
const Notification = () => {
  return (
    <Wrapper>
      <NotDone>
        This part of the app is not yet implemented (stretch goal).
      </NotDone>
    </Wrapper>
  );
};
export const Wrapper = styled.div`
  left: 20vw;
  position: relative;
  height: 100vh;
  background-color: grey;
  width: 80vw;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;
export const NotDone = styled.div`
  margin-top: 20vh;
`;
export default Notification;
