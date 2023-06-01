import { Box } from "@mui/system";
import Sidebar from "../Sidebar/Sidebar";
import Viewport from "../Viewport/Viewport";
import './style.css'
import Navbar from "../Navbar/Navbar";
import { useContext, useEffect } from "react";
import { LogInHeaderContext, UserContext } from "../../Helper/Context";


export default function Dashboard() {
    const {user, setUser} = useContext(UserContext)
    const {header, setHeader} = useContext(LogInHeaderContext)
    useEffect(()=>{
        console.log(user)
        console.log(header)
    },[])
    return (
        <>  
            <Navbar/>
            <Box component='div' className="dashboard"
            maxWidth= 'xl'
            height='xl'>
                <div className="sidebar">
                    <Sidebar/>
                </div>
                <div className="viewport">
                    <Viewport/>
                </div>
            </Box>
        </>
    
  )
}
