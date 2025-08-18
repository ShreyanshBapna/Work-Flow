import { Sidebar } from './component/sidebar'
import './App.css'
import Empolyeeboard from './component/employee'
import { Signup } from './component/signup'
import { Signin } from './component/signin'


function App() {
  return <div className='flex'>
    <Sidebar />
    <Empolyeeboard />
   
  </div>
}

export default App
