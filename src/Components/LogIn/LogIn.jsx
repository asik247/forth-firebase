import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const LogIn = () => {
    const {signInUser} = use(AuthContext)
    // console.log(signInUser);
    const handleSignIn = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        signInUser(email,password)
        .then(res=>{
            console.log(res.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-5">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignIn}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" name='email' placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" name='password' placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;