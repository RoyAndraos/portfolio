import { createContext, useState } from "react";
import { initialAvailability } from "../helpers";
export const UserContext = createContext("");
// handles the barber information
export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState([
    {
      _id: "85123",
      given_name: "Roy",
      last_name: "Andraos",
      email: "roy_andraos@live.fr",
      phone: "5554443333",
      description: "I am a barber, I cut hair, I am good at it. Hire me.",
      availability: initialAvailability,
      time_off: [],
    },
  ]);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
