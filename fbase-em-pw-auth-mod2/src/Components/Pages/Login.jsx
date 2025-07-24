import { NavLink } from "react-router-dom";

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.password.value);
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
                </div>
            </div>
        </div>
    );
};

export default Login;