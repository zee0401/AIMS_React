
import './App.css'
import SideBar from './components/SideBar'
import AdminDashboard from './pages/AdminDashboard'
import EmployeeLeaves from './pages/EmployeeLeaves'
import EmployeeList from './pages/EmployeeList'
import Login from './pages/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
  <BrowserRouter>
<SideBar/>
  <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/' element={<AdminDashboard/>}></Route>
    <Route path='/employeelist' element={<EmployeeList/>}></Route>
    <Route path='/employeeleaves' element={<EmployeeLeaves/>}></Route>
  </Routes>
  </BrowserRouter>
    </>
    
  )
}

export default App
