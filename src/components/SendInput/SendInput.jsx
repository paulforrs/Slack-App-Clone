import { useContext, useState } from 'react'
import './style.css'
import { ReceiverIdContext, ReceiverClassContext, HeaderContext} from '../../Helper/Context'
export default function SendInput() {
  const {header, setHeader} = useContext(HeaderContext)
  const {receiverId, setReceiverId} = useContext(ReceiverIdContext)
  const {receiverClass, setReceiverClass} = useContext(ReceiverClassContext)
  const [messageBody, setMessageBody] = useState('')
  const [textAreaHeight, setTextAreaHeight] = useState('')
  const messageTextArea = document.getElementById('message-textarea')
  function handleChangeMessage(e){
    // console.log(e.target.value)
    setMessageBody(e.target.value)
    setTextAreaHeight(messageTextArea.scrollHeight)
    messageTextArea.style.height = 'auto'
    messageTextArea.style.height =`${messageTextArea.scrollHeight}px`
    if(messageTextArea.scrollHeight > 360){
      messageTextArea.style.height = '360px'
      messageTextArea.style.overflowX = 'hidden'
      messageTextArea.style.overflowY = 'scroll'
    }

  }
  // send message function
  async function sendMessage(receiverId,receiverClass){
    const getSendMessageResponse = await fetch('http://206.189.91.54/api/v1/messages',{
        method: 'POST',
        headers: header,
        body: JSON.stringify({
            "receiver_id": receiverId,
            "receiver_class": receiverClass,
            // "receiver_id": 3503,
            // "receiver_class": 'User',
            "body": messageBody
        })
    })
    const body = await getSendMessageResponse.json()
    console.log(body)
    setMessageBody('')
  }
  function handleSend(){
    sendMessage(receiverId, receiverClass)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // handle sending the message
      sendMessage();
    }
  };
  return (
    <div id='input-section'>
        <textarea id='message-textarea'
        value={messageBody}
        onChange={handleChangeMessage}
        // onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        style={{
          width: '100%',
          minHeight: '40px',
          height:'auto',
          overflow: 'hidden',
          resize: 'none',
        }}
        rows={1}
      />
        <button onClick={handleSend}>Send</button>
    </div>
  )
}
