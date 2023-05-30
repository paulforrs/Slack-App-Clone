import './App.css'
import {Routes, Route} from 'react-router-dom'
import Registration from './components/Auth/Registration/Registration'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/register' Component={Registration}/>
        <Route path='/' Component={Home}/>
      </Routes>
    </>
  )
}

export default App
