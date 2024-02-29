
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './component/Signup.jsx'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './component/Login.jsx'
import Home from './component/Home.jsx'
function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/home' element={<Home/>}></Route>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
