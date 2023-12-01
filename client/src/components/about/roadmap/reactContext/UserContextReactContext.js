import { createContext, useState } from "react";

export const UserContextReactContext = createContext(null);

export const UserReactContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const user = sessionStorage.getItem("user");
    if (!user) {
      return null;
    } else {
      return user;
    }
  });

  return (
    <UserContextReactContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContextReactContext.Provider>
  );
};
