import { Eye, EyeOff } from 'lucide-react';
import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext';

const Register = () => {

    const [showPassword,setShowPassword]=useState(false)
    const {createUser,emailVerify}=use(AuthContext)
    const [error,setError]=useState('')
    const [success,setSuccess]=useState(false)
    const navigate=useNavigate()

    const handleReg=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        setError('')

        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            setSuccess(true);
            e.target.reset();
            navigate('/profile')
            emailVerify(result.user)
            .then(()=>alert("Verify your email"))
            .catch(error=>{
                console.log(error);
            })
            
        }).catch(error=>{
            console.log(error.message);
            setError(error.message)
            setSuccess(false)
        })
    }

    return (
<div className='mt-40 mb-20'>
            <form onSubmit={handleReg}>
            <fieldset className="fieldset bg-base-200 m-auto border-base-300 rounded-box w-xs border p-4">
    <div className='text-center text-xl font-extrabold'>Register</div>

  <label className="label">Email</label>
  <input type="email" name='email' className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password" />

  {showPassword ? <EyeOff  onClick={()=>setShowPassword(!showPassword)} className='relative left-63 bottom-9 cursor-pointer'></EyeOff> : <Eye onClick={()=>setShowPassword(!showPassword)} className='relative left-63 bottom-9 cursor-pointer'></Eye>}

  <button className="btn btn-neutral mt-4">Register</button> 

  <div>Already have an account? <Link className='text-purple-800 font-bold' to={'/login'}>login</Link></div>

  {error && <h1 className='text-red-700 font-bold'>{error}</h1>}

  {success && <h1 className='text-green-700 font-bold'>New account created successfully</h1>}
</fieldset>
            </form>
        </div>
    );
};

export default Register;