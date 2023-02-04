import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const signInUser = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }
 
  const updateUser = (userInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser,userInfo)
  }

  const signOutUser = () =>{
    setLoading(true);
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,createUser=>{
      setUser(createUser);
      setLoading(false);
    })
    return () =>{
      unsubscribe()
    }
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    updateUser
  }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;