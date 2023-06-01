import { Box } from "@mui/system";
import Sidebar from "../Sidebar/Sidebar";
import Viewport from "../Viewport/Viewport";
import './style.css'
import Navbar from "../Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { LogInHeaderContext, UserContext, ChannelListContext, ChannelIdContext } from "../../Helper/Context";

export default function Dashboard() {
    const {user, setUser} = useContext(UserContext)
    const {header, setHeader} = useContext(LogInHeaderContext)
    const {channelId, setChannelId} = useState('')
    const [channelList, setChannelList] = useState([])
    // Channels
    async function getChannels(){
        try {
            const getChannelsResponse = await fetch('http://206.189.91.54/api/v1/channels',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'access-token': header.accessToken,
                'client' : header.client,
                'expiry': header.expiry,
                'uid': header.uid
            },
        })
        const body = await getChannelsResponse.json()
        setChannelList(body.data || [])
        console.log(body.data)
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(()=>{
        getChannels()
    },[])
    useEffect(()=>{
        console.log(channelId)
    })
    // Get All users
    useEffect(()=>{
        async function getUsers(){
            const getUsetsResponse = await fetch('http://206.189.91.54/api/v1/users',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': header.accessToken,
                    'client' : header.client,
                    'expiry': header.expiry,
                    'uid': header.uid
                }
            })
            const body = await getUsetsResponse.json()
            console.log(body)
        }

        getUsers()
    }, [header])
    useEffect(()=>{
        async function getChannelDetails(){
            const getChannelDetailsResponse = await fetch('http://206.189.91.54/api/v1/channels/3',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': header.accessToken,
                    'client' : header.client,
                    'expiry': header.expiry,
                    'uid': header.uid
                }
            })
        }
    })
    return (
        <>  
        <ChannelIdContext.Provider value={{channelId, setChannelId}}>
        <ChannelListContext.Provider value={{channelList, setChannelList}}>
            <Navbar/>
            <Box component='div' className="dashboard"
            maxWidth= 'xl'
            height='xl'>
                <div className="sidebar">
                    <Sidebar getChannels={getChannels}/>
                </div>
                <div className="viewport">
                    <Viewport/>
                </div>
            </Box>
        </ChannelListContext.Provider>
        </ChannelIdContext.Provider>
        </>
    
  )
}
