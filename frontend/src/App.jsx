import LoginPage  from './components/loginPage' 
import OTPVerifiaction from './components/OTPVerification.jsx';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/otp" element={<OTPVerifiaction/>} /> {/* This is your new route */}
      </Routes>
    </Router>
      
    </>
  )
}

export default App
