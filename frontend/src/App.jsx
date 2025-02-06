import ChatWindow from './components/ChatWindow.jsx';
import LoginPage  from './components/LoginPage.jsx' 
import OTPVerifiaction from './components/OTPVerification.jsx';
import RegistrationPage from './components/RegistrationPage.jsx';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/Store.js';

function App() {

  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/otp" element={<OTPVerifiaction/>} /> 
        <Route path="/registerationPage" element={<RegistrationPage/>} /> 
        <Route path="/chatwindow" element={<ChatWindow/>} />

      </Routes>
    </Router>
      
    </Provider>
  )
}

export default App
