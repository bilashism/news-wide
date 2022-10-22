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

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [authLoading, setAuthLoading] = useState(true);

  const providerLogin = provider => {
    setAuthLoading(true);
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    setAuthLoading(true);
    return signOut(auth);
  };
  const createUser = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogIn = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const cleanup = onAuthStateChanged(auth, currentUser => {
      setUser(prev => (prev = { ...user, ...currentUser }));
      setAuthLoading(false);
    });

    return () => cleanup();
  }, []);

  const authInfo = {
    user,
    createUser,
    authLoading,
    providerLogin,
    userLogIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
