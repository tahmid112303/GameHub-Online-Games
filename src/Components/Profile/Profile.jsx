import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';

const Profile = () => {
    const {updateInfo}=useContext(AuthContext)
    const [success,setSuccess]=useState(false)
    const [error,setError]=useState(false)

    const handleUpdateInfo = e =>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photoURL.value;

        setError(false)
        updateInfo({
            displayName: name,
            photoURL: photo
        })
        .then(()=>{
            // console.log("Data updated");
            setSuccess(true)
            e.target.reset();
        }).catch(error=>{
            console.log(error);
            setSuccess(false)
            setError(true)
        })
    }
    return (
        <div className='mt-35 mb-20'>
            <form onSubmit={handleUpdateInfo}>
            <fieldset className="fieldset bg-base-200 m-auto border-base-300 rounded-box w-xs border p-4">
  <div className='text-center font-bold text-xl mb-6'>Update Your Information</div>

  <label className="label font-bold">Name</label>
  <input type="text" name='name' className="input" placeholder="Your Name" />

  <label className="label font-bold">PhotoURL</label>
  <input type="url" name='photoURL' className="input" placeholder="https://example.com/photo.jpg" />

  <button className="btn btn-info mt-4 font-bold text-white text-[1.3em]">Update Information</button>

  {success && <h1 className='text-green-700 font-bold'>Data updated successfully</h1>}

  {error && <h1 className='text-red-700 font-bold'>An error occured</h1>}
</fieldset>
            </form>
        </div>
    );
};

export default Profile;