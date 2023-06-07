import React, { useState }  from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { axiosInstance as axios } from '../../utils/axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [values, setValues] = useState({
        fullname: '',
        email: '',
        password: '' 
    })
    const navigate = useNavigate()

    const handleForm = async(e) =>{
        e.preventDefault()
        try{
            const { data } = await axios.post('/user/signup',  { ...values })
            console.log(data)
            if(data) {
                toast.success(`Hi ${data.fullname}, Successfully registered. Please login `, {
                    toastId: "secret2",
                    theme: "light"
                  });
                  function myFunction() {
                    const timeout = setTimeout(alertFunc, 5000);
                  }
                  function alertFunc() {
                    navigate('/')
                  }
                  myFunction();
            }       
        }catch(error){
            if(error.response.data) {
                toast.error(error.response.data, {
                    toastId: "secretId",
                    theme: "light"
                  });
            }else console.log(error)
        } 
    }


  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div
        className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">Register</h3>
          <form  className="flex flex-col space-y-5" onSubmit={(e) => handleForm(e)}>
            <div className="flex flex-col space-y-1">
              <label for="fullname" className="text-sm font-semibold text-gray-500">Full Name</label>
              <input
                type="text"
                id="fullname"
                name='fullname'
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label for="email" className="text-sm font-semibold text-gray-500">Email address</label>
              <input
                type="email"
                id="email"
                name='email'
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="password" className="text-sm font-semibold text-gray-500">Password</label>
                
              </div>
              <input
                type="password"
                id="password"
                name='password'
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
              />
            </div>
            <div className="flex items-center space-x-2">
              <p for="remember" className="text-sm font-semibold text-gray-500">Already have an account ?</p>
              <NavLink to='/' className="text-blue-600 hover:underline focus:text-blue-800 text-sm">Login</NavLink>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Signup
