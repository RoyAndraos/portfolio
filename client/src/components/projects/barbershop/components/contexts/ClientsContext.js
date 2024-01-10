import { createContext, useState } from "react";

export const ClientsContext = createContext("");
// handles clients to be loaded
export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState([
    {
      _id: "b374f295-4c7a-43ee-8473-f2bae2cd1081",
      email: "email@example.com",
      note: "hi",
      fname: "John",
      lname: "Doe",
      number: "1212121212",
      reservations: ["1330505d-dbe8-4c94-b10b-30ffd21c07de"],
    },
  ]);
  return (
    <ClientsContext.Provider value={{ clients, setClients }}>
      {children}
    </ClientsContext.Provider>
  );
};
