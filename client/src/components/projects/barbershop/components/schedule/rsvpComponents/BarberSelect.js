import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { LabelInputWrapper } from "../RSVP_Form";
import styled from "styled-components";
import { StyledLabel } from "../RSVP_Form";
const BarberSelect = ({ selectedBarberForm, setBarber }) => {
  const { userInfo } = useContext(UserContext);
  useEffect(() => {
    if (userInfo.length === 1) setBarber(userInfo[0]);
  }, [userInfo, setBarber]);
  return (
    <LabelInputWrapper>
      <StyledLabel>Barber</StyledLabel>
      <div>
        {Object.keys(selectedBarberForm).length === 0 ? (
          userInfo.map((barber) => {
            return (
              <BarberSlot
                style={{ width: "30vw" }}
                key={barber.given_name}
                onClick={() => {
                  setBarber(barber);
                }}
              >
                {barber.given_name}
              </BarberSlot>
            );
          })
        ) : (
          <BarberSlot
            style={{
              background: "#035e3f",
              border: "transparent solid 1px",
              color: "whitesmoke",
            }}
            onClick={() => setBarber({})}
          >
            {selectedBarberForm.given_name}
          </BarberSlot>
        )}
      </div>
    </LabelInputWrapper>
  );
};

export const BarberSlot = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 10px 0 10px 0;
  text-align: center;
  margin: 10px 5px 0 0;
  width: 30vw;
  transition: 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: clamp(16px, 18px, 22px);
  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
  &:first-of-type {
    margin-top: 0;
  }
  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export default BarberSelect;
