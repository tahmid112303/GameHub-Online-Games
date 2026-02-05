import { Eye, EyeOff } from 'lucide-react';
import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthContext';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const [showPassword,setShowPassword]=useState(false)
    const {createUser,emailVerify}=use(AuthContext)
    const [error,setError]=useState('')
    const [success,setSuccess]=useState(false)

    const handleReg=(e)=>{
        e.preventDefault();
        const userName=e.target.userName.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        setError('')

        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            setSuccess(true);
            e.target.reset();
            emailVerify(result.user)
            .then(()=>alert("Verify your email"))
            .catch(error=>{
                console.log(error);
            })
            
            return updateProfile(result.user, {
                displayName: userName
              });
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

    <label className="label">Name</label>
    <input type="text" name='userName' className="input" placeholder="Name" />

  <label className="label">Email</label>
  <input type="email" name='email' className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password" />

  {showPassword ? <EyeOff  onClick={()=>setShowPassword(!showPassword)} className='relative left-63 bottom-9 cursor-pointer'></EyeOff> : <Eye onClick={()=>setShowPassword(!showPassword)} className='relative left-63 bottom-9 cursor-pointer'></Eye>}

  <button className="btn btn-neutral mt-4">Register</button> 

  <button className="btn bg-blue-200 mt-2 font-semibold text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

  <div>Already have an account? <Link className='text-purple-800 font-bold' to={'/login'}>login</Link></div>

  {error && <h1 className='text-red-700 font-bold'>{error}</h1>}

  {success && <h1 className='text-green-700 font-bold'>New account created successfully</h1>}
</fieldset>
            </form>
        </div>
    );
};

export default Register;