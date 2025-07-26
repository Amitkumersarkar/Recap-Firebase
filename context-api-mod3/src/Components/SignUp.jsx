import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // create user
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.log('error', error.message);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input name="name" type="text" className="input" placeholder="Full Name" />
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">SignUp</button>
                                <p className="text-center font-semibold">All Ready Have Accounts ? <Link to='/login'><span className="text-green-600 font-bold"> LogIn</span></Link> </p>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;