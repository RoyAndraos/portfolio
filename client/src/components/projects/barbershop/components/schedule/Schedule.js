import { styled } from "styled-components";
import NewCalendar from "./rsvpComponents/NewCalendar";
import AddReservation from "../schedule/RSVP_Form";
import { useState } from "react";

const Schedule = () => {
  const [slotBeforeCheck, setSlotBeforeCheck] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <Wrapper key={"calendar"}>
        <NewCalendar
          slotBeforeCheck={slotBeforeCheck}
          setSlotBeforeCheck={setSlotBeforeCheck}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
        />
      </Wrapper>
      <Wrapper key={"rsvp"} style={{ height: "fit-content" }}>
        <AddReservation
          slotBeforeCheck={slotBeforeCheck}
          setSlotBeforeCheck={setSlotBeforeCheck}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
        />
      </Wrapper>
    </div>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  height: 91.5vh;
`;
export default Schedule;
