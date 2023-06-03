import { useContext , useState} from "react"
import { UserContext, HeaderContext, UserAuthContext } from "../../../Helper/Context"

export default function LogIn() {
    const {user, setUser} = useContext(UserContext)
    const {header,setHeader} = useContext(HeaderContext)
    const {authUser} = useContext(UserAuthContext)
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleChangeEmail =(e)=>{
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handlePassworrdChange = (e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit= (e)=>{
        e.preventDefault()
        authUser({email, password})
    }
    return (
        <div>
            <h1>Log In</h1>
            <form action="">
                <input onChange={handleChangeEmail} type="text" value={email}/>
                <input onChange={handlePassworrdChange}type="password" value={password}/>
                <button type="submit" onClick={handleSubmit}>Log in</button>
            </form>
        </div>
    )
}
