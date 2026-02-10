import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {

    const navigate=useNavigate()
    return (
        <div className='mt-40 text-center text-6xl font-bold text-blue-600'>
            404 Page Not Found <br />

            <button onClick={()=>navigate(-1)} className="btn btn-primary mt-20 w-38 h-13 font-bold text-[20px] mb-10">Go Back</button>
        </div>
    );
};

export default ErrorPage;