import { Link } from "react-router-dom"
import {Button} from '@mui/material'
import './style.css'

export default function Home() {
  return (
    <div className="home">
       
        <Link to='/register' className="auth-button">
          <Button variant="contained" className="auth-button">
            Sign Up
          </Button>
        </Link>
        <Link to='/log-in' className="auth-button">
          <Button variant="outlined" className="auth-button">
            Log In
          </Button>
        </Link>
        
      
    </div>
  )
}
