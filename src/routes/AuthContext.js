import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../firebase";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const INIT_STATE = {
  user: null,
};

export const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CHEK_USER":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function register(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
  }
  const googleProvider = new GoogleAuthProvider();
  async function googleSignUp() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log("error");
    }
  }

  function chekUser() {
    return onAuthStateChanged(auth, (user) => {
      dispatch({
        type: "CHEK_USER",
        payload: user,
      });
    });
  }

  useEffect(() => {
    chekUser();
  }, []);

  function signInAc(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }

  async function logOut(){
    try {
      await signOut(auth)
    } catch (error) {
      console.log("error");
    }
  }

  const values = {
    googleSignUp,
    register,
    user: state.user,
    signInAc,
    logOut
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
