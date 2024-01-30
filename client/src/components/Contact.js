import styled from "styled-components";

import CotactMeLinks from "./contact/CotactMeLinks";
const Contact = () => {
  return (
    <Wrapper>
      <CotactMeLinks></CotactMeLinks>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  position: relative;
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;

export default Contact;
