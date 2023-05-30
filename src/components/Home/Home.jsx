import { Link } from "react-router-dom"
import {Button} from '@mui/material'

export default function Home() {
  return (
    <div>
        <Button variant="contained">
            <Link to='/register'> Sign Up</Link>
        </Button>
        <Button variant="outlined">
            <Link to='/'>Log In</Link>
        </Button>
      
    </div>
  )
}
