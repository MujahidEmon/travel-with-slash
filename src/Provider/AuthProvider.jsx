import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(false)

    const createEmailUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const Logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const LoginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const LoginWithGithub = () =>{
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe();
    }, [])
    const AuthInfo = {
        user,
        createEmailUser,
        Login,
        Logout,
        LoginWithGoogle,
        LoginWithGithub,
        loading
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;