import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const UserContextTwitter = createContext(null);
export const UserTwitterProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    fetch("https://roy-portfolio-server.onrender.com/api/me/profile")
      .then((res) => res.json())
      .then((result) => setCurrentUser(result.profile), setStatus("idle"));
  }, []);
  return (
    <UserContextTwitter.Provider value={{ currentUser, status }}>
      {children}
    </UserContextTwitter.Provider>
  );
};
