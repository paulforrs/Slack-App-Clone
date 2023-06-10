import { useContext , useState} from "react"
import { UserContext, HeaderContext, UserAuthContext } from "../../../Helper/Context"
import './style.css'

export default function LogIn() {
    const {user, setUser} = useContext(UserContext)
    const {header,setHeader} = useContext(HeaderContext)
    const {authUser} = useContext(UserAuthContext)
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleChangeEmail =(e)=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit= (e)=>{
        e.preventDefault()
        authUser({email, password})
    }
    return (
        <div className="login-page">
            <div className="login-wrapper">
                <h1>Log In</h1>
                <form action="">
                    <input onChange={handleChangeEmail} type="text" value={email} className="login"/>
                    <input onChange={handlePasswordChange} type="password" value={password} className="login"/>
                    <button type="submit" onClick={handleSubmit} className="login">Log in</button>
                </form>
            </div>
        </div>
    )
}
