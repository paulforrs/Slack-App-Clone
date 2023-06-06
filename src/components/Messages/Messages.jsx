import{ useContext, useEffect,useRef} from 'react'
import { MessagesContext } from '../../Helper/Context'
import MessageItem from './MessageItem'

export default function Message() {
    const {messages, setMessages} = useContext(MessagesContext)
    const scrollableRef = useRef(null);
    const populateMessages=(messages)=>{
        return messages.map(message=>{
            return (<MessageItem key={message.id}message= {message}/>)
        })
    }

    useEffect(() => {
        const scrollableElement = scrollableRef.current;
        scrollableElement.scrollIntoView({ block: 'end' });
      })
    return (
        <div ref={scrollableRef} >
            {populateMessages(messages)}
        </div>
    )
}
