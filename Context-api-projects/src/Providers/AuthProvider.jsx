import { createContext } from "react";

// declared context for authenticate
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // set default value for auth context
    const authInfo = {
        name: 'sea beach',
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