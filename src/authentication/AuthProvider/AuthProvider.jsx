import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  updateProfile,
  signInWithPopup,
  sendEmailVerification,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
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
  const updateUserProfile = profile => {
    setAuthLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  const userLogIn = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  useEffect(() => {
    const cleanup = onAuthStateChanged(auth, currentUser => {
      if (currentUser === null || currentUser?.emailVerified) {
        setUser(prev => (prev = { ...user, ...currentUser }));
      }
      setAuthLoading(false);
    });

    return () => cleanup();
  }, []);

  const authInfo = {
    user,
    createUser,
    updateUserProfile,
    verifyEmail,
    authLoading,
    setAuthLoading,
    providerLogin,
    userLogIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
