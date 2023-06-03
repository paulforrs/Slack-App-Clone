import { Box ,TextField, Button} from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { ChannelIdContext, HeaderContext, MessagesContext } from '../../Helper/Context'
import SendInput from '../SendInput/SendInput'
import './style.css'


export default function Viewport() {
    const {channelId, setChannelId} = useContext(ChannelIdContext)
    const {header, setHeader} = useContext(HeaderContext)
    const [receiverID, setReceiverId] = useState(4556)
    const [receiverClass, setReceiverClass] = useState("Channel")
    const {messages, setMessages} = useContext(MessagesContext)
    // Retreive Messages
    async function getMessages(){
        const getMessagerResponse = await fetch(`http://206.189.91.54/api/v1/messages?receiver_id=${receiverID}&receiver_class=${receiverClass}`,{
            method: 'GET',
            headers: header
        })
        const body = await getMessagerResponse.json()
        setMessages(body)
        console.log(body)
    }
    // Send Messages
    async function sendMessage(){
        const getSendMessageResponse = await fetch('http://206.189.91.54/api/v1/messages',{
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                "receiver_id": receiverID,
                "receiver_class": "Channel",
                "body": "Channel Test?"
            })
        })
        const body = await getSendMessageResponse.json()
        console.log(body)
    }
    useEffect(()=>{
        getMessages()
    },[])
    return (
        <div className='viewport' id='viewportContainer'>
            <div id='messagesContainer'>
                <ul>
                    <li>
                        MEssages
                    </li>
                </ul>
            </div>
            <SendInput/>
        </div>
  )
}
