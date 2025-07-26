import { createContext } from "react";
import auth from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null);

const Provider = ({ children }) => {

    // auth file
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login/signin user
    const signInUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }
    // set default value
    const name = 'tomato';
    const authInfo = {
        name,
        createUser,
        signInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;