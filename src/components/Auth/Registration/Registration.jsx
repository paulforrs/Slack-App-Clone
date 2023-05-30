import { TextField, Button } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
// import Log in page
export default function Registration() {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    function onChangeEmail(e){
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    function onChangePassword(e){
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    function onChangeConfirmPass(e){
        setConfirmPass(e.target.value)
        console.log(e.target.value)
    }
    async function onSubmit(e){
        e.preventDefault()
        const response = await fetch('http://206.189.91.54/api/v1/auth/',{
            method: "POST",
            body:
                {
                    "email": "user1@example.com",
                    "password": "12345678",
                    "password_confirmation": "12345678"
                }
        })
        const body = await response.json()
        console.log(body)
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <h1>Sign Up</h1>
                <TextField
                required
                id="email-input"
                label="Email"
                defaultValue={email}
                helperText="Required*"
                onChange={onChangeEmail}
                />
                <TextField
                required
                id="password-input"
                label="Password"
                type="password"
                defaultValue={password}
                helperText="Required*"
                onChange={onChangePassword}
                />
                <TextField
                required
                id="confirm-password-input"
                label="Confirm Password"
                type="password"
                helperText="Required*"
                defaultValue={confirmPass}
                onChange={onChangeConfirmPass}
                />
                <Button type="submit" variant="contained">Sign Up</Button>
            </form>
            <p>Already have an account? <Link to='/'>Log In</Link></p>
        </>
    )
    }
