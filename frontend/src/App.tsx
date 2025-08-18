import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from './page/signup'
import { Signin } from './page/signin'
import { Dashboard } from './page/dashboard'
import Employeeboard from './page/employee'



function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>}/> 
      <Route path="/signup" element={<Signup/>}/> 
      <Route path="/signin" element={<Signin/>}/> 
      <Route path="/dashboard" element={<Dashboard/>}/> 
      <Route path="/employee" element={<Employeeboard/>}/> 
    </Routes>
  </BrowserRouter>
}

export default App
