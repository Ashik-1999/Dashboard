import React, {useState} from 'react'
import { axiosInstance as axios } from '../../utils/axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState('')
    const [showPasswordInput, setShowPasswordInput ] = useState(false)
    const [userData, setUserData] = useState({})
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const {data} = await axios.post('user/submit-new-password', 
            {
                email: userData.email,
                password: newPassword
            })
            if(data.mssg) {
                toast.success(data.mssg, {
                    toastId: "secretId",
                    theme: "light"
                  });
                  function myFunction() {
                    const timeout = setTimeout(alertFunc, 3000);
                  }
                  function alertFunc() {
                    navigate('/')
                  }
                  myFunction();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const chechEmail = async(e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/user/check-email',{
                email: email
            }) 
            if(data) {
                setShowPasswordInput(true)
                setUserData(data)
            }
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
    <div>
        <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div
        className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">Forgot Password</h3>
          <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label for="email" className="text-sm font-semibold text-gray-500">Enter your Email</label>
              <input
                type="email"
                id="email"
                name='email'
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e) => setEmail(e.target.value )}
              />
            </div>
           {!showPasswordInput && <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                onClick={(e) => chechEmail(e)}
              >
                Submit
              </button>
            </div>}
           { 
            showPasswordInput && <>
                <div className="flex flex-col space-y-1">
                <label for="password" className="text-sm font-semibold text-gray-500">Enter new password</label>
                <input
                    type="password"
                    id="password"
                    name='password'
                    autofocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                    onChange={(e) => setNewPassword(e.target.value )}
                />
                </div>
                <div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                    Submit
                </button>
                </div>  </>}
          </form>
        </div>
      </div>
      <ToastContainer />

    </div>
    </div>
  )
}

export default ForgotPassword
