import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";
import auth from "../../Firebase/Fbase.init";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Login = () => {
    // declared state for toggling password
    const [showPassword, setShowPassword] = useState(false);
    // showing success message
    const [success, setSuccess] = useState(false);
    // declared state for showing error message
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(email, password, terms);

        // reset error message
        setErrorMessage('');
        setSuccess(false);
        //checking password types
        // console.log(typeof password);
        // password validation in client side and return function here
        if (!terms) {
            setErrorMessage('please accepts our terms and conditions');
            return;
        }
        if (password.length < 6) {
            setErrorMessage('password should be 6 character or longer');
            return;

        }
        // password validation by special character
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('atLeast One upperCase ,One LowerCase, One Number,One Special Character');
            return;
        }
        // create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess(true);
            })
            .catch((error) => {
                // const errorCode = error.code;
                console.log('ERROR 404..!!', error.message);
                setErrorMessage(error.message);
                setSuccess(false);
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
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <fieldset className="fieldset relative">
                                <label className="label font-semibold">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label font-semibold">Password</label>
                                {/* password icon and toggle by conditions */}
                                <input
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    className="input"
                                    placeholder="Password" />
                                <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-10 top-26.5 bg-transparent">
                                    {
                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                    }
                                </button>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                {/* checkbox */}
                                {/* <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4"> */}
                                <label className="label cursor-pointer pt-2">
                                    <input type="checkbox" name="terms" className="checkbox" />
                                    <span className="label-text">Accepts Our Terms & Conditions ?</span>
                                </label>
                                {/* </fieldset> */}
                                <button className="btn btn-neutral mt-4">Login</button>
                                <NavLink to='/signup'> <p className="text-center">Don't have accounts? <span className="text-blue-700 font-bold">SignUp</span></p></NavLink>
                            </fieldset>
                        </div>
                    </form>
                    {/* showing error message here */}
                    {
                        errorMessage && <p className="text-red-600 text-xs font-semibold text-center pb-2">{errorMessage}</p>
                    }
                    {/* showing success message */}
                    {
                        success && <p className="text-fuchsia-600 text-center">login successfully </p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;