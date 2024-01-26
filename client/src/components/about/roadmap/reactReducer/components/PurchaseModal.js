import { Dialog, DialogTitle } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { BookingContext } from "./BookingContext.js";
import styled from "styled-components";
import { decodeSeatId } from "../helpersReducer.js";
import { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { SeatContext } from "./SeatContext.js";

const PurchaseModal = () => {
  const [creditCard, setCreditCard] = useState("");
  const [expiration, setExpiration] = useState("");
  const {
    state: { selectedSeatId, seatPrice },
    actions: {
      cancelBookingProcess,
      purchaseTicketRequest,
      purchaseTicketSuccess,
      purchaseTicketFailure,
    },
  } = useContext(BookingContext);

  const {
    actions: { markSeatAsPurchased },
  } = useContext(SeatContext);

  const handleClose = (e) => {
    e.preventDefault();
    cancelBookingProcess();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    purchaseTicketRequest();
    fetch("https://roy-portfolio-server.onrender.com/api/book-seat", {
      method: "POST",
      body: JSON.stringify({
        seatId: selectedSeatId,
        creditCard: creditCard,
        expiration: expiration,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.json().then((data) => {
          if (data.success) {
            purchaseTicketSuccess();
            markSeatAsPurchased(selectedSeatId);
          } else {
            purchaseTicketFailure();
            window.alert("This is a simulated error, please try again! ");
          }
        })
      )
      .catch((err) => {
        purchaseTicketFailure();
      });
  };
  return (
    <CardInfo open={selectedSeatId !== null} fullWidth={true}>
      <XButton onClick={(e) => handleClose(e)}>X</XButton>
      <DialogTitle>Purchase ticket</DialogTitle>
      <Parag>You're purchasing 1 ticket for the price of {seatPrice}</Parag>
      <TableWrapper>
        <TableContainer component={Paper}>
          <Table aria-label="simple table"></Table>
          <TableHead>
            <TableRow>
              <TableCell>Row</TableCell>
              <TableCell>Seat</TableCell>
              <TableCell>price</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>{decodeSeatId(selectedSeatId).rowName}</TableCell>
              <TableCell>{decodeSeatId(selectedSeatId).seatNum}</TableCell>
              <TableCell>${seatPrice}</TableCell>
            </TableRow>
          </TableBody>
        </TableContainer>
      </TableWrapper>
      <CardDetails>
        <CardDetailsTitle>Enter payment details</CardDetailsTitle>
        <InputWrapper>
          <CreditCardWrapper>
            <Label>Credit Card</Label>
            <Inputs
              type="text"
              onChange={(e) => {
                setCreditCard(e.target.value);
              }}
            />
          </CreditCardWrapper>
          <CreditCardWrapper>
            <Label>Expiration</Label>
            <Inputs
              type="text"
              onChange={(e) => {
                setExpiration(e.target.value);
              }}
            />
          </CreditCardWrapper>
          <Submit
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </Submit>
        </InputWrapper>
      </CardDetails>
    </CardInfo>
  );
};

const XButton = styled.button`
  position: absolute;
  background-color: transparent;
  color: #222;
  top: 3px;
  right: 3px;
  border: none;
`;

const CardInfo = styled(Dialog)`
  position: relative;
`;

const Parag = styled.p`
  margin: 0 0 20px 20px;
`;

const CardDetails = styled.div`
  background-color: #f2f2f2;
  margin: 30px 0 30px 0;
`;

const CardDetailsTitle = styled.h4`
  margin: 20px 0 0 20px;
`;

const Label = styled.label`
  position: absolute;
  color: #757575;
  font-size: 10px;
  background-color: #f2f2f2;
  padding: 0 3px 0 3px;
  top: -5px;
  left: 7px;
`;

const InputWrapper = styled.div`
  display: flex;
  margin: 30px 0 30px 30px;
`;

const CreditCardWrapper = styled.div`
  position: relative;
`;

const Inputs = styled.input`
  background-color: #f2f2f2;
  border: 2px solid #dcdcdc;
  border-radius: 3px;
  margin-right: 10px;
  height: 40px;
  padding-left: 10px;
  &:focus {
    outline: none;
    border: 2px solid #4952a9;
  }
`;

const Submit = styled.button`
  background-color: #4952a9;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0 20px 0 20px;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

const TableWrapper = styled.div`
  margin: 0 auto;
`;
export default PurchaseModal;
