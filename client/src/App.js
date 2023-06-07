import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Home />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />


      </Routes>
    </Router>
  );
}

export default App;
