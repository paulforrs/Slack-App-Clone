
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

    // CACHING TEST
    const now = new Date().getTime()
    console.log(now)
    const cache = {}
    let cacheTimer = 0
    // CACHING TEST
    
    const navigate = useNavigate()
    // Retreive Messages
    async function getMessages(prop){
        const {receiver, id} = prop
        const getMessagerResponse = await fetch(`http://206.189.91.54/api/v1/messages?receiver_id=${id}&receiver_class=${receiver}`,{
            method: 'GET',
            headers: header
        })
        const body = await getMessagerResponse.json()
        setMessages(body.data)
    }
    async function getDirectMessages(){
        const RECEIVER_CLASS = 'User'
        const allUserId = allUsers.map(user =>{
            return user.id
        })
        const directMessageList = allUserId.map( async (id)=>{
            fetch(`http://206.189.91.54/api/v1/messages?receiver_id=${id}&receiver_class=${RECEIVER_CLASS}`,{
                method: 'GET',
                headers: header
            })
            .then(res => res.json())
            .then(data =>{
                if(data.data.length < 0){
                    console.log('hit')
                }
            })
        })
    }
    
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
        console.log('channel fetched')
        console.log(channelList)
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
                                    <Sidebar getChannels={getChannels} getMessages={getMessages}/>
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
