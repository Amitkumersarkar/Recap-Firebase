
const SignUp = () => {
    const handleSubmit2 = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const userName = e.target.userName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, userName, email, password);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">SignUp Now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda.
                    </p>
                </div>
                <div className="card bg-cyan-600 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit2}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label font-semibold">Full Name</label>
                                <input name="name" type="text" className="input" placeholder="Name" />
                                <label className="label font-semibold">User Name</label>
                                <input name="userName" type="text" className="input" placeholder="User Name" />
                                <label className="label font-semibold">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label font-semibold">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;