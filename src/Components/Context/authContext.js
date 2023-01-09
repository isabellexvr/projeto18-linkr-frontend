import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const savedToken = localStorage.getItem("userToken");
  const [token, setToken] = useState(savedToken);

  function setAndPersistToken(userToken) {
    setToken(userToken);
    const serialized = JSON.stringify(token)
    localStorage.setItem("userToken", serialized);
  }

  return (
    <AuthContext.Provider
      value={{
        setAndPersistToken,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
