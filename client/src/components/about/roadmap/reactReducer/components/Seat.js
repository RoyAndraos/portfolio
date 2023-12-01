import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import seatImage from "../assets/seat-available.svg";
import styled from "styled-components";
import { useContext } from "react";
import { BookingContext } from "./BookingContext";

const Seat = ({ key, rowName, seatIndex, price, seatStatus }) => {
  const {
    actions: { beginbookingprocess },
  } = useContext(BookingContext);

  const handleClick = (e) => {
    e.preventDefault();
    beginbookingprocess({
      ...BookingContext,
      status: "seat-selected",
      selectedSeatId: `${rowName}-${seatIndex}`,
      seatPrice: price,
    });
  };

  return (
    <Tippy
      key={key}
      content={"Row " + rowName + ", Seat " + seatIndex + " - $" + price}
    >
      <StyledButton disabled={seatStatus ? true : false} onClick={handleClick}>
        <img
          src={seatImage}
          style={seatStatus ? { filter: "grayscale(100%)" } : {}}
          alt={seatStatus ? "Unavailable Seat Image" : "Available Seat Image"}
        />
      </StyledButton>
    </Tippy>
  );
};

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
`;
export default Seat;
