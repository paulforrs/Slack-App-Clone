import './App.css'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Registration from './components/Auth/Registration/Registration'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import { useEffect, useState } from 'react'
import { HeaderContext, UserContext, AllUsersContext, UserAuthContext } from './Helper/Context'
import LogIn from './components/Auth/LogIn/LogIn'

function App() { 
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')) || null)
  const [header, setHeader] = useState(JSON.parse(sessionStorage.getItem('header')) || null)
  const [allUsers, setAllUsers] = useState([])
  const [authUser] = useState(()=>userAuth)
  const [allUsersId, setAllusersId] = useState([])
  const navigate = useNavigate()
// User Authentication
  async function userAuth(prop){
    const {email, password} = prop
    try{
        const response = await fetch('http://206.189.91.54/api/v1/auth/sign_in',{
            headers: {'Content-Type': 'application/json'},
            method: "POST",
            body: JSON.stringify({
                    email,
                    password,
                })
        })
        const body =  await response.json()
        setHeader({
            'Content-Type': 'application/json',
            'access-token': response.headers.get('access-token'),
            'client': response.headers.get('client'),
            'expiry': response.headers.get('expiry'),
            'uid': response.headers.get('uid')
        })
        if(body.status === 'error'){
          console.log('error')
        }
        else{
          setUser(body.data)
          console.log(body.data)
          console.log(body.data)
          navigate('/dashboard')
        }
        
    }catch(error){
        console.log(error)
    }
}
useEffect(()=>{
  if(!user){
    navigate('/')
  }
},[])
  useEffect(()=>{
    sessionStorage.setItem('user', JSON.stringify(user))
    sessionStorage.setItem('header', JSON.stringify(header))
  },[header ,user])

  return (
      <AllUsersContext.Provider value={{allUsers, setAllUsers}}>
        <UserContext.Provider value={{user, setUser}}>
          <HeaderContext.Provider value={{header,setHeader}}>
            <UserAuthContext.Provider value={{authUser}}>
              <Routes>
                  <Route path='/register' Component={Registration}/>
                  <Route path='/log-in' Component={LogIn}/>
                  <Route path='/' Component={Home}/>
                  <Route path='/dashboard' Component={Dashboard}/>
              </Routes>
            </UserAuthContext.Provider>
          </HeaderContext.Provider>
        </UserContext.Provider>
      </AllUsersContext.Provider>
    
    
  )
}

export default App
