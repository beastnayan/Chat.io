import ChatWindow from './components/ChatWindow.jsx';
import LoginPage  from './components/loginPage' 
import OTPVerifiaction from './components/OTPVerification.jsx';
import RegistrationPage from './components/RegistrationPage.jsx';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/otp" element={<OTPVerifiaction/>} /> 
        <Route path="/registerationPage" element={<RegistrationPage/>} /> 
        <Route path="/chatwindow" element={<ChatWindow/>} />

      </Routes>
    </Router>
      
    </>
  )
}

export default App
