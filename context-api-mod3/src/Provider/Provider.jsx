import { createContext } from "react";
import auth from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null);

const Provider = ({ children }) => {

    // auth file
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // set default value
    const name = 'tomato';
    const authInfo = {
        name,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;