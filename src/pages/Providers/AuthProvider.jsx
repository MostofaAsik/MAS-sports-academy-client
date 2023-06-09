import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            //get and set token
            if (currentUser) {
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {
                    email: currentUser.email,
                })
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('access-token', data.data.token)
                    })
            }
            localStorage.removeItem('access-token')


            setLoading(false)
        })
        return () => {
            return unsubscribe;
        }
    }, [])


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }



    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        googleLogin,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;