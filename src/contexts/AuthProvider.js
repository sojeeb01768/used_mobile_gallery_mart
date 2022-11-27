import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const popUpLogin = (Provider) => {
        return signInWithPopup(auth, Provider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUSer = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    // on auth state changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])

    const authInfo = {
        createUser,
        logIn,
        popUpLogin,
        user,
        logOut,
        updateUSer,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;