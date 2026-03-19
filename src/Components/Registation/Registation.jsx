import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../firebase/firebase.init';

const Registation = () => {
    // handle submit;
    const hanldeSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value
        console.log(email, password);
        createUserWithEmailAndPassword(auth,email,password)
        .then(res=>{
            console.log(res.user);
        }).catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ft">
                        <h1 className="text-5xl font-bold mb-5">Registation now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={hanldeSubmit}>
                                <fieldset className="fieldset">
                                    {/* Email */}
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    {/* Password */}
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />

                                    <button className="btn btn-neutral mt-4">Registation</button>
                                </fieldset>
                                {/* link code here */}
                                <li className='text-sm list-none'>Already have'n account ? please <Link to={'/login'}  className='text-blue-600 font-bold text-sm underline'>LogIn</Link></li>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registation;