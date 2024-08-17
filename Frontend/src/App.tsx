import Signin from './pages/Signin';
import Signup from './pages/Signup';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppBar from './components/AppBar';

function App() {
  return (
    <>
      <BrowserRouter>
          <AppBar />
        <Routes>
          <Route path='/' element = {<HomePage />} />
          <Route path='/Home' element = {<HomePage />} />
          <Route path='/signin' element={ <Signin />} />
          <Route path='/signup' element={ <Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
