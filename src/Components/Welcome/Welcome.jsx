import React from 'react'

function Welcome() {
  return (
    <div className='flex justify-center p-5'>
        <div className='w-[300px] p-5 text-center shadow-[0_0_10px_black]'>
            <h2 className='text-2xl font-bold'>Welcome <span className='text-green-600'>user</span>!</h2>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Welcome;