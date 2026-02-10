import React, { use } from 'react';
import gameLogo from '../assets/Game.png'
import profileLogo from '../assets/profile.png'
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  const {user,logOutUser}=use(AuthContext)
  const navigate=useNavigate();

  function handleLogOut(){
    navigate('/login')
    logOutUser()
    .then(()=>{
      console.log("Signed out");
    }).catch(error=>{
      console.log(error);
    })
  }

  const Links=<>

    <NavLink to={'/home'}>Home</NavLink>
    <NavLink to={'/'}>About</NavLink>
    <NavLink to={'/contact'}>Contact Us</NavLink>
    

    {!user &&  <>
      <NavLink to={'/login'}>Login</NavLink>
      <NavLink to={'reg'}>Register</NavLink>
    </>}


  </>


    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div> 
    
    <img className='w-16 h-16 ml-6' src={gameLogo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-4 font-bold text-xl text-purple-700">
      {Links}
    </ul>
  </div>
  <div className="navbar-end flex gap-6">
      {user && <div className='flex items-center gap-2'>
      <span className='font-bold'>Profile</span>
      <img onClick={()=>navigate('/profile')} className='cursor-pointer rounded-full h-10 w-10' src={user.photoURL ? user.photoURL : profileLogo} />
      </div>}

    <a onClick={handleLogOut} className="btn mr-4 bg-amber-800 text-white">
      {user ? 'Sign Out' : 'Sign In'}</a>
  </div>
</div>
    );
};

export default Navbar;