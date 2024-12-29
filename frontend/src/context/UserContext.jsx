import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // Method to handle login and update state

  const handleLogin = (user, token) => {
    setLoggedInUser(user);
    setToken(token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    window.location.href = "/home";
  };

  // Method to handle logout and update state

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <UserContext.Provider
      value={{
        handleLogin,
        setLoggedInUser,
        setToken,
        loggedInUser,
        token,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
