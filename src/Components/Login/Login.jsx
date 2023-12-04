import {useState} from 'react'
import {loginAction} from '../Redux/actions/authAction'
import {updateOpenGraphTags} from '../updateMeta/updateMeta'

function Login() {

    const [formData, setFormData] = useState({
      username:'',
      password:''
    });

    const handleForm = (e) => {
        e.preventDefault();
        if(formData.username==='user' && formData.password==='password') {
            alert("Logged in successfully!");
            loginAction(formData.username);
            updateOpenGraphTags(formData.username);
        } else {
            alert("Wrong credentials entered! Please try again.");
        }
    }
  return (
    <div className='flex justify-center p-5'>
      <div className='w-[280px] p-5 shadow-[0_0_10px_black]'>
        <h2 className='text-2xl font-bold text-center mb-7'>Login Form</h2>
        <form onSubmit={handleForm}>
          <div className='flex flex-col mb-5'>
            <label className='mb-1'>Username</label>
            <input type="text" placeholder='Enter Username' 
              className='border border-gray-400 p-1 rounded-[4px]'
              required
              onChange={(e) => {
                  setFormData({
                      ...formData,
                      username: e.target.value
                  })
              }}
            />
          </div>
          <div className='flex flex-col mb-5'>
            <label>Password</label>
            <input type="text" placeholder='Enter Password'
              className='border border-gray-400 p-1 rounded-[4px]'
              required
              onChange={(e) => {
                  setFormData({
                      ...formData,
                      password: e.target.value
                  })
              }}
            />
          </div>
          <div className='mt-8'>
            <button className='w-[100%] border border-black py-[5px] bg-orange-300 hover:bg-orange-400'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login