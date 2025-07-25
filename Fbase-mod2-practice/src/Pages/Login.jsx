import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
const Login = () => {
    // declared state to show error message
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // reset error message
        setErrorMessage('');

        // create signin method and authenticate
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);

            })
            .catch((error) => {
                console.log('Error 404', error.message);
                setErrorMessage(error.message);
            })

    }
    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda .
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmitForm}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <p className="text-center">Don't Have Accounts ? <Link to='/register'><span className="text-green-600 font-bold">Register</span></Link> </p>
                            </fieldset>
                        </div>
                    </form>
                    {
                        errorMessage && <p className="text-red-600 text-center font-semibold">{errorMessage}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;