import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);

const providerLogin = provider => signInWithPopup(auth, provider);
const logOut = () => signOut(auth);
const createUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

const userLogIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const cleanup = onAuthStateChanged(auth, currentUser => {
      setUser(prev => (prev = { ...user, ...currentUser }));
      setAuthLoading(false);
    });

    return () => cleanup();
  }, []);

  const authInfo = { user, createUser, providerLogin, userLogIn, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
