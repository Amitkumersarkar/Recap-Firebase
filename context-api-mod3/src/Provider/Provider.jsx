import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
    // sign out user
    const signOutUser = () => {
        return signOut(auth);
    }
    // useEffect to set observer
    useEffect(() => {
        // to kept information declared this
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user', currentUser);
            setUser(currentUser);

        })
        // return something
        return () => {
            // call unsubscribe
            unsubscribe();
        }
    }, [])


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
        user,
        createUser,
        signInUser,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;