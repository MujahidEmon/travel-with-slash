import { createContext, useState } from "react";
import app from "../Firebase/firebase.config";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState([])




    const AuthInfo = {
        user
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;