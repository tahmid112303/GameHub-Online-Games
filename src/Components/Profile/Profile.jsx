import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Profile = () => {
    const {updateInfo}=useContext(AuthContext)

    const handleUpdateInfo = e =>{
        e.preventDefault();
        const name=e.target.name.value;
        const photoURL=e.target.photoURL.value;

        updateInfo(name,photoURL)
        .then(()=>{
            console.log("Data updated");
        }).catch(error=>{
            console.log(error);
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
</fieldset>
            </form>
        </div>
    );
};

export default Profile;