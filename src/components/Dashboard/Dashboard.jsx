import { Box } from "@mui/system";
import Sidebar from "../Sidebar/Sidebar";
import Viewport from "../Viewport/Viewport";
import './style.css'
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { HeaderContext,MessagesContext, UserContext, ChannelListContext, ReceiverIdContext, AllUsersContext, ReceiverClassContext } from "../../Helper/Context";

export default function Dashboard() {
    const {user, setUser} = useContext(UserContext)
    const {header, setHeader} = useContext(HeaderContext)
    const {allUsers, setAllUsers} = useContext(AllUsersContext)
    const [receiverId, setReceiverId] = useState('')
    const [receiverClass, setReceiverClass] = useState('')
    const [channelList, setChannelList] = useState([])
    const [messages, setMessages] = useState([])
    const navigate = useNavigate()
    // Fetch Channels List
    async function getChannels(){
        try {
            const getChannelsResponse = await fetch('http://206.189.91.54/api/v1/channels',{
            method: 'GET',
            headers: header
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
 
    // Get All users
    useEffect(()=>{
        async function getUsers(){
            const getUsetsResponse = await fetch('http://206.189.91.54/api/v1/users',{
                method: 'GET',
                headers: header
            })
            const body = await getUsetsResponse.json()
            setAllUsers(body.data)
        }

        getUsers()
    }, [])
    useEffect(()=>{
        console.log(allUsers)
    },[])
    // useEffect(()=>{
    //     console.log(channelId)
    // },[channelId])
    // getChannelDetails()
    async function getChannelDetails(){
        const getChannelDetailsResponse = await fetch(`http://206.189.91.54/api/v1/channels/${receiverId}`,{
            method: 'GET',
            headers: header
        })
        const body = await getChannelDetailsResponse.json()
    }
 
    return (
        <div className="dashboardWrapper">  
            <ReceiverClassContext.Provider value={{receiverClass, setReceiverClass}}>
                <MessagesContext.Provider value={{messages, setMessages}}>
                    <ReceiverIdContext.Provider value={{receiverId, setReceiverId}}>
                        <ChannelListContext.Provider value={{channelList, setChannelList}}>
                            <Navbar/>
                            <Box component='div' className="dashboard"
                            maxWidth= 'xl'
                            height='xl'>
                                <div className="sidebarWrapper">
                                    <Sidebar getChannels={getChannels}/>
                                </div>
                                <div className="viewportWrapper">
                                    <Viewport/>
                                </div>
                            </Box>
                        </ChannelListContext.Provider>
                    </ReceiverIdContext.Provider>
                </MessagesContext.Provider>
            </ReceiverClassContext.Provider>
        </div>
    
  )
}
