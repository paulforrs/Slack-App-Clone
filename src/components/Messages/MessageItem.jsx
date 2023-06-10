import { useContext, useState } from 'react'
import { UserContext } from '../../Helper/Context'

export default function MessageItem(prop) {
    const {user} = useContext(UserContext)
    const {message} = prop
    const receiver = message.receiver.uid
    const sender = message.sender.uid
    const body = message.body
    const id = message.id
    const date = new Date(message.created_at)
    const time = date.toLocaleTimeString()
    const messageClass = user.uid === sender ? 'sender message':'receiver message'
    return (
        <div className='messageWrapper'>
            <div className={messageClass}>
                <img src="" alt="" />
                <h4 className='name'>{sender}</h4>
                <h5>{message.body}</h5>
                <h6 className='time'>{time}</h6>
            </div>
        </div>
        
    )
    }
