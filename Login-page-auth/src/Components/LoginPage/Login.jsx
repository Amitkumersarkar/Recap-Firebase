import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { useState } from "react";

const Login = () => {

    // declared state
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();
    // declared github auth provider
    const githubProvider = new GithubAuthProvider();

    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                console.log('Error', error);
                setUser(null);
            })
    }
    // signout 
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('signout done');
                // reset user
                setUser(null);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    // github integration
    const handleWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch((err) => {
                console.log('Error', err);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            {/* <button onClick={handleLoginWithGoogle} className="btn btn-neutral mt-4">Login</button> */}
                            {/* <button onClick={handleSignOut} className="btn btn-primary">LogOut</button> */}

                            {/*signout signin conditional method */}
                            {
                                user ? <button onClick={handleSignOut} className="btn btn-primary">LogOut</button> : <>
                                    <button onClick={handleLoginWithGoogle} className="btn btn-neutral mt-4">Login</button>
                                    <button onClick={handleWithGithub} className="btn btn-ghost">Login With Github</button>
                                </>
                            }
                            {
                                // showing user info by condition
                                user && <div>
                                    <h2>
                                        {user.displayName}
                                    </h2>
                                    <h2>{user.email}</h2>
                                    <div>
                                        <img src={user.photoURL} alt="" />
                                    </div>
                                </div>
                            }
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;