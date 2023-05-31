import './App.css'
import {Routes, Route} from 'react-router-dom'
import Registration from './components/Auth/Registration/Registration'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  return (
    <>
      <Routes>
        <Route path='/register' Component={Registration}/>
        <Route path='/' Component={Home}/>
        <Route path='/dashboard' Component={Dashboard}/>
      </Routes>
    </>
  )
}

export default App
