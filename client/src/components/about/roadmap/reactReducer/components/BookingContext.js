import { createContext, useReducer } from "react";

export const BookingContext = createContext();

export const initialState = {
  status: "idle",
  error: null,
  selectedSeatId: null,
  seatPrice: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "begin-booking-process": {
      return {
        ...state,
        status: action.status,
        error: action.error,
        selectedSeatId: action.selectedSeatId,
        seatPrice: action.seatPrice,
      };
    }

    case "cancel-booking-process": {
      return initialState;
    }

    case "purchase-ticket-request": {
      return {
        ...state,
        status: "requesting",
        error: null,
        selectedSeatId: action.selectedSeatId,
        seatPrice: action.seatPrice,
      };
    }

    case "purchase-ticket-success": {
      return {
        ...state,
        status: "success",
        selectedSeatId: null,
        seatPrice: null,
      };
    }

    case "purchase-ticket-failure": {
      return {
        ...state,
        status: "failure",
        error: action.error,
        selectedSeatId: null,
        seatPrice: null,
      };
    }

    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

// Note: The return statement below should be inside a function
export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const beginbookingprocess = (data) => {
    dispatch({
      type: "begin-booking-process",
      ...data,
    });
  };

  const cancelBookingProcess = () => {
    dispatch({
      type: "cancel-booking-process",
    });
  };

  const purchaseTicketRequest = () => {
    dispatch({
      type: "purchase-ticket-request",
    });
  };

  const purchaseTicketSuccess = () => {
    dispatch({
      type: "purchase-ticket-success",
    });
  };

  const purchaseTicketFailure = (error) => {
    dispatch({
      type: "purchase-ticket-failure",
      error,
    });
  };

  return (
    <BookingContext.Provider
      value={{
        state,
        actions: {
          beginbookingprocess,
          cancelBookingProcess,
          purchaseTicketRequest,
          purchaseTicketSuccess,
          purchaseTicketFailure,
        },
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
