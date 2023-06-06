import React from 'react'

export default function MessageItem(prop) {
    const {message} = prop
    const receiver = message.receiver.uid
    const sender = message.sender.uid
    const body = message.body
    const id = message.id
    const date = new Date(message.created_at)
    const time = date.toLocaleTimeString()
    return (
        <div>
            <img src="" alt="" />
            <h4>{sender}</h4>
            <h5>{message.body}</h5>
            <h6>{time}</h6>

        </div>
    )
    }
