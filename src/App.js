
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import Login from './page/Login';
import Register from './page/Register';
import EmailVerify from './components/verifyEmail';


function App() {
  return (
    <BrowserRouter>
    <Routes path='/'>
      <Route index element={<HomePage/>} />
      <Route path="signin" element={<Login/>} />
      <Route path="signup" element={<Register/>} />
      <Route path="auth/verify/:id/:token" element={<EmailVerify />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
