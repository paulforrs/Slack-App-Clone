import { Box ,TextField, Button} from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { ReceiverIdContext, HeaderContext, MessagesContext } from '../../Helper/Context'
import SendInput from '../SendInput/SendInput'
import './style.css'
import Messages from '../Messages/Messages'


export default function Viewport() {
    const {receiverId, setReceiverId} = useContext(ReceiverIdContext)
    const {header, setHeader} = useContext(HeaderContext)
    const [receiverClass, setReceiverClass] = useState("Channel")
    const {messages, setMessages} = useContext(MessagesContext)

    return (
        <div className='viewport' id='viewportContainer'>
            <div id='messagesContainer'>
                <Messages/>
            </div>
            <SendInput/>
        </div>
  )
}
