import React, { createContext } from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/FirebaseConfig";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // create user
  const createUser = () => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    createUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
