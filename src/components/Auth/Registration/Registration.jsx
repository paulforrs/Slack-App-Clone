import { TextField, Button, Alert, Snackbar } from "@mui/material"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { LogInHeaderContext, UserContext } from "../../../Helper/Context"
import './style.css'
// import Log in page
export default function Registration() {
    const {user, setUser} = useContext(UserContext)
    const {header,setHeader} = useContext(LogInHeaderContext)
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [severity, setSeverity] = useState('success')
    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const handleSignUpMessage = () => {
        setOpen(true);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    }
    function onChangeEmail(e){
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    function onChangePassword(e){
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    function onChangeConfirmPass(e){
        setPasswordConfirmation(e.target.value)
        console.log(e.target.value)
    }
    async function onSuccessSignUp(){
        try{
            const response = await fetch('http://206.189.91.54/api/v1/auth/sign_in',{
                headers: {'Content-Type': 'application/json'},
                method: "POST",
                body: JSON.stringify({
                        email,
                        password,
                    })
            })
            const accessToken =  response.headers.get('access-token')
            const client =  response.headers.get('client')
            const expiry =  response.headers.get('expiry')
            const uid =   response.headers.get('uid')
            const body =  await response.json()
            setHeader({
                accessToken,
                client,
                expiry,
                uid
            })
            console.log(body.data)
            setUser(body.data)
            navigate('/dashboard')
        }catch(error){
            console.log(error)
        }
    }
    async function onSubmit(e){
        e.preventDefault()
        console.log('Submitting')
        try {
            const response = await fetch('http://206.189.91.54/api/v1/auth/',{
                headers: {'Content-Type': 'application/json'},
                method: "POST",
                body: JSON.stringify({
                        email,
                        password,
                        password_confirmation : {passwordConfirmation},
                    })
                
            })
            const body = await response.json()
            console.log(body)
            if(body.status === 'error'){
                console.log(body.errors.full_messages[0])
                setMessage(body.errors.full_messages[0])
                setSeverity('error')
            }
            else{
                setMessage('Sign Up successful!')
                setSeverity('success')
                onSuccessSignUp();
                
            }
        }catch(error){
            console.log(error)
        }
        finally{
            handleSignUpMessage()
        }
        
    }
    return (
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
            <div className="signUp">
                <form onSubmit={onSubmit}>
                    <h1>Sign Up</h1>
                    <TextField
                    // required
                    id="email-input"
                    label="Email"
                    defaultValue={email}
                    helperText="Required*"
                    onChange={onChangeEmail}
                    />
                    <TextField
                    // required
                    id="password-input"
                    label="Password"
                    type="password"
                    defaultValue={password}
                    helperText="Required*"
                    onChange={onChangePassword}
                    />
                    <TextField
                    // required
                    id="confirm-password-input"
                    label="Confirm Password"
                    type="password"
                    helperText="Required*"
                    defaultValue={passwordConfirmation}
                    onChange={onChangeConfirmPass}
                    />
                    <Button type="submit" variant="contained">Sign Up</Button>
                </form>
                <p>Already have an account? <Link to='/'>Log In</Link></p>
            </div>
        </>
    )
    }
