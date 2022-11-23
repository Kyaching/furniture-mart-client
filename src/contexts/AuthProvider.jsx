import React from "react";
import {createContext} from "react";

const AuthContext = createContext();
const AuthProvider = () => {
  const authInfo = {};
  return <AuthContext.Provider value={authInfo} />;
};

export default AuthProvider;
