import React from 'react'
import './style.css'
export default function SendInput() {
  return (
    <div id='input-section'>
        <span
        id='message'
        className="input" 
        role="textbox"
        placeholder='Send message....'
        contentEditable>
        </span>
        <button>Send</button>
    </div>
  )
}
