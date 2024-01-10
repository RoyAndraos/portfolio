import { createContext, useState } from "react";

export const ReservationContext = createContext("");

export const ReservationProvider = ({ children }) => {
  const [reservations, setReservations] = useState([
    {
      barber: "Roy",
      date: "Tue Jan 09 2024",
      slot: ["Tue-4:15pm", "Tue-4:30pm"],
      service: {
        _id: "06",
        name: "coupe enfant",
        price: "25$",
        duration: "1",
      },
      fname: "John",
      lname: "Doe",
      email: "email@example.com",
      number: "1212121212",
      _id: "1330505d-dbe8-4c94-b10b-30ffd21c07de",
      client_id: "b374f295-4c7a-43ee-8473-f2bae2cd1081",
    },
  ]);

  return (
    <ReservationContext.Provider value={{ reservations, setReservations }}>
      {children}
    </ReservationContext.Provider>
  );
};
