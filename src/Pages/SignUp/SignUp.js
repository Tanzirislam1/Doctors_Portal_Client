import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/UseToken';

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        signUpUser,
        signUpLoading,
        signUpError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken(googleUser || signUpUser);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();

    if (token) {
        navigate('/appointment');
    }

    if (googleLoading || signUpLoading || updating) {
        return <Loading></Loading>;
    }

    let errorMessage;

    if (googleError || signUpError || updateError) {
        errorMessage = <p className='text-red-500 text-center py-2'>{googleError?.message || signUpError?.message || updateError?.message}</p>
    }

    const onSubmit = async data => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        alert('User Updated Done');

    };
    return (
        <div className='px-12 flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Please Signup</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },
                                })}
                            />

                            <label className="label">
                                {errors.name?.type === 'required' && <p role="alert" className='text-red-500'>{errors.name.message}</p>}
                                {errors.name?.type === 'pattern' && <p role="alert" className='text-red-500'>{errors.name.message}</p>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <p role="alert" className='text-red-500'>{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p role="alert" className='text-red-500'>{errors.email.message}</p>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters or longer'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <p role="alert" className='text-red-500'>{errors.password.message}</p>}
                                {errors.password?.type === 'minLength' && <p role="alert" className='text-red-500'>{errors.password.message}</p>}
                            </label>
                        </div>
                        {errorMessage}
                        <input className='btn w-full max-w-xs' type="submit" value="SignUp" />
                    </form>
                    <div>
                        <p><small>Already have an Account? <Link to="/login" className='text-primary'>Please Login</Link></small></p>
                    </div>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;