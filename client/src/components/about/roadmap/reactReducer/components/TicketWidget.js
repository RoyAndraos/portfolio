import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { useContext } from "react";
import { SeatContext } from "./SeatContext";
import { getRowName, getSeatNum } from "../helpersReducer.js";
import { range } from "../utils";
import Seat from "./Seat.js";

const TicketWidget = () => {
  const {
    state: { numOfRows, seatsPerRow, hasLoaded, seats },
  } = useContext(SeatContext);

  if (!hasLoaded) {
    return (
      <CenterLoad>
        <CircularProgress />
      </CenterLoad>
    );
  }

  return (
    <Wrapper>
      {range(numOfRows).map((rowIndex) => {
        const rowName = getRowName(rowIndex);
        return (
          <Row key={rowIndex}>
            <RowLabel>Row {rowName}</RowLabel>
            {range(seatsPerRow).map((seatIndex) => {
              const seatId = `${rowName}-${getSeatNum(seatIndex)}`;
              return (
                <SeatWrapper key={seatId}>
                  <Seat
                    seatStatus={seats[seatId].isBooked}
                    rowName={rowName}
                    seatIndex={getSeatNum(seatIndex)}
                    price={seats[seatId].price}
                  />
                </SeatWrapper>
              );
            })}
          </Row>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px;
`;

const Row = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  &:not(:last-of-type) {
    border-bottom: 1px solid #ddd;
  }
`;

const RowLabel = styled.div`
  margin-right: 10px;
  font-weight: bold;
  color: #222;
`;

const SeatWrapper = styled.div`
  padding: 5px;
`;

const CenterLoad = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default TicketWidget;
