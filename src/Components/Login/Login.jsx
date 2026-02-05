import { Eye, EyeOff } from 'lucide-react';
import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext';

const Login = () => {

    const [showPassword,setShowPassword]=useState(false)
    const {signIn,forgotPassword}=use(AuthContext)
    const [error,setError]=useState('')
    const [success,setSuccess]=useState(false)
    const location=useLocation()
    const navigate=useNavigate()
    const emailRef=useRef()

    console.log(location);

    const handleForgottenPassword=()=>{
        const email=emailRef.current.value;

        forgotPassword(email)
        .then(()=>{
            alert("Password reset link has been sent to your email")
        }).catch(error=>{
            console.log(error);
        })
    }

    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;

        setError('')
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            setSuccess(true)
            e.target.reset()
            navigate(location.state || '/')
        }).catch(error=>{
            console.log(error.message);
            setError(error.message)
            setSuccess(false)
        })
    }

    return (
        <div className='mt-40 mb-20'>
            <form onSubmit={handleLogin}>
            <fieldset className="fieldset bg-blue-300 m-auto border-base-300 rounded-box w-xs border p-4">
    <div className='text-center text-xl font-extrabold'>Login</div>

  <label className="label">Email</label>
  <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password" />

  {showPassword ? <EyeOff  onClick={()=>setShowPassword(!showPassword)} className='relative left-63 bottom-9 cursor-pointer'></EyeOff> : <Eye onClick={()=>setShowPassword(!showPassword)} className='relative left-63 bottom-9 cursor-pointer'></Eye>}

  <button className="btn btn-neutral mt-4">Login</button>

  <div><a onClick={handleForgottenPassword} className='link link-hover'>Forgotten password?</a></div>

  <div>Don't have an account? <Link className='text-purple-800 font-bold' to={'/reg'}>register</Link></div>

  {error && <h1 className='text-red-700 font-bold'>{error}</h1>}

  {success && <h1 className='text-green-700 font-bold'>Logged in</h1>}
</fieldset>
            </form>
        </div>
    );
};

export default Login;