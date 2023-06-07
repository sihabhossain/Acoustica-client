import React, { createContext, useEffect } from "react";
import { useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/FirebaseConfig";

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider(auth);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user
  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login using Google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Onauth Change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    Login,
    LogOut,
    googleLogin,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
