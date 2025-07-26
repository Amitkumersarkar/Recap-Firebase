import { createContext, useState } from "react";
import auth from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null);

const Provider = ({ children }) => {
    // set an state for current user
    const [user, setUser] = useState(null);
    // auth file
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login/signin user
    const signInUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }
    // set an observer to stay logged in or not
    // onAuthStateChanged(auth, (currentUser) => {
    //     if (currentUser) {
    //         console.log('currently logged user', currentUser);
    //         setUser(currentUser);

    //     } else {
    //         console.log('no user logged in');
    //         setUser(null);
    //     }
    // })
    // set default value
    const name = 'tomato';
    const authInfo = {
        name,
        createUser,
        signInUser,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;