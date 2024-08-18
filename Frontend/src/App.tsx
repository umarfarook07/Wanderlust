import Signin from './pages/Signin';
import Signup from './pages/Register';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppBar from './components/AppBar';
import ForgotPassword from './pages/ForgotPassword';
import CheckInbox from './pages/CheckInbox';

function App() {
  return (
    <>
      <BrowserRouter>
          <AppBar />
        <Routes>
          <Route path='/' element = {<HomePage />} />
          <Route path='/Home' element = {<HomePage />} />
          <Route path='/signin' element={ <Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/checkInbox' element={ <CheckInbox/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
