import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";
import auth from "../../Firebase/Fbase.init";
import { useState } from "react";

const Login = () => {
    // declared state for showing error message
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // reset error message
        setErrorMessage('');

        // create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                // const errorCode = error.code;
                console.log('ERROR 404..!!', error.message);
                setErrorMessage(error.message);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda.
                    </p>
                </div>
                <div className="card bg-cyan-500 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label font-semibold">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label font-semibold">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <NavLink to='/signup'> <p>Don't have accounts? <span className="text-blue-700 font-bold">SignUp</span></p></NavLink>
                            </fieldset>
                        </div>
                    </form>
                    {/* showing error message here */}
                    {
                        errorMessage && <p className="text-red-600 text-xs font-semibold text-center pb-2">{errorMessage}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;