import React from 'react'
import { logoutAction } from '../Redux/actions/authAction';
import { resetOpenGraphTags } from '../updateMeta/updateMeta';

function Welcome() {
    const handleLogout = () => {
        logoutAction();
        resetOpenGraphTags();
    }

  return (
    <div className='flex justify-center p-5'>
        <div className='w-[300px] p-5 text-center shadow-[0_0_10px_black]'>
            <h2 className='text-2xl font-bold mb-[15px]'>Welcome <span className='text-green-600'>user</span>!</h2>
            <button onClick={handleLogout} className='border px-[15px] py-1 bg-orange-300 hover:bg-orange-400'>Logout</button>
        </div>
    </div>
  )
}

export default Welcome;