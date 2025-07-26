import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

// declared context for authenticate
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // set default value for auth context
    const name = 'apple';
    // declare authentication file and return the auth function
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {
        name,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {/* main part who will have access to this context */}
            {/* used children element here */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;