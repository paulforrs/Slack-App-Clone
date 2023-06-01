import './App.css'
import {Routes, Route} from 'react-router-dom'
import Registration from './components/Auth/Registration/Registration'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import { useEffect, useState } from 'react'
import { LogInHeaderContext, UserContext, AllUsersContext } from './Helper/Context'
function App() { 
  const [ user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')) || null)
  const [header, setHeader] = useState(JSON.parse(sessionStorage.getItem('header')) || null)
  const [allUsers, setAllUsers] = useState('')

  useEffect(()=>{
    console.log('reload')
    sessionStorage.setItem('user', JSON.stringify(user))
  },[user])
  useEffect(()=>{
    console.log('header')
    sessionStorage.setItem('header', JSON.stringify(header))
  },[header])
  return (
    <AllUsersContext.Provider value={{allUsers, setAllUsers}}>
    <UserContext.Provider value={{user, setUser}}>
    <LogInHeaderContext.Provider value={{header,setHeader}}>
      <Routes>
          <Route path='/register' Component={Registration}/>
          <Route path='/' Component={Home}/>
          <Route path='/dashboard' Component={Dashboard}/>
      </Routes>
    </LogInHeaderContext.Provider>
    </UserContext.Provider>
    </AllUsersContext.Provider>
    
  )
}

export default App
