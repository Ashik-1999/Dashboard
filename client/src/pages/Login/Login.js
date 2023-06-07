import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { axiosInstance as axios } from '../../utils/axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [values, setValues] = useState({ email: "", password: "" });
    const navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post("/user/login",{ ...values,},
                { withCredentials: true }
              );
            if(data.login) navigate('/dashboard')
        } catch (error) {
            if(error.response.data.mssg) {
                toast.error(error.response.data.mssg, {
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
          <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
          <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label for="email" className="text-sm font-semibold text-gray-500">Email address</label>
              <input
                type="email"
                id="email"
                name='email'
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="password" className="text-sm font-semibold text-gray-500">Password</label>
                <NavLink to='/forgot-password' className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</NavLink>
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
              <p for="remember" className="text-sm font-semibold text-gray-500">Dont have an account ?</p>
              <NavLink to='/signup' className="text-blue-600 hover:underline focus:text-blue-800 text-sm">Register</NavLink>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />

    </div>
  )
}

export default Login
