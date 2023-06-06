import React from 'react'

export default function MessageItem(prop) {
    const {message} = prop
    const receiver = message.receiver
    const sender = message.sender.name
    const body = message.body
    const id = message.id
    console.log(message)
    return (
        <div>
            <img src="" alt="" />
            <h4></h4>
            <p>{message.body}</p>

        </div>
    )
    }
