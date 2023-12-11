import styled from "styled-components";

const ConfirmationMsg = (data) => {
  const formInfo = data.data
    return(
      <Wrapper>
        <Thanks>Thanks for ordering, {formInfo.givenName}!</Thanks>
        <Delivery>Your order of {formInfo.order} will be sent to your home in {formInfo.province}, Canada. Thank you for participating! </Delivery>
      </Wrapper>
    )
  };

const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  z-index: 4;
  text-align: center;
  border-radius: 30%;
`;

const Thanks = styled.p`
  padding: 2vh 2vw 2vh 2vw;
  font-size: 20px;
`

const Delivery = styled.p`
padding: 0 2vw 2vh 2vw;
  font-size: 15px;
`

export default ConfirmationMsg;
