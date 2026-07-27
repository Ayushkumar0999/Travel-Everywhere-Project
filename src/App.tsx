import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { TravelEverywhereHome } from "./components/TravelEverywhereHome";
import './App.css'
import { UserLogin } from "./components/UserLogin";
import { UserDashBoard } from "./components/UserDashBoard";
import { UserLoginError } from "./components/UserLoginError";
import { AdminLogin } from "./components/AdminLogin";
import { UserRegister } from "./components/UserRegister";

function App() {
 
  return (
    <div className=" container-fluid">
      <BrowserRouter>
      <section>
        <Routes>
          <Route path='/' element={< TravelEverywhereHome />} />
          <Route path='user-login' element={< UserLogin />} />
          <Route path='user-dashboard' element={< UserDashBoard />} />
          <Route path='user-login-error' element={< UserLoginError />} />
          <Route path='admin-login' element={< AdminLogin />} />
          <Route path='user-register' element={< UserRegister />} />

        </Routes>
      </section>
      </BrowserRouter>
    </div>
  )
}

export default App
