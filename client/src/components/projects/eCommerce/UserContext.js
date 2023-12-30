import { createContext, useReducer } from "react";
import { CLEAR_USER, STORE_USER } from "./constants/UserConstants";

let initialState = {
  user: undefined,
};

export const UserContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case STORE_USER: {
      return {
        ...state,
        user: {
          ...action.user,
        },
      };
    }

    case CLEAR_USER: {
      return {
        ...state,
        user: undefined,
      };
    }

    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const storeUser = (data) => {
    dispatch({
      type: STORE_USER,
      ...data,
    });
  };

  const clearUser = () => {
    dispatch({
      type: CLEAR_USER,
    });
  };
  return (
    <UserContext.Provider
      value={{
        state,
        actions: {
          storeUser,
          clearUser,
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
