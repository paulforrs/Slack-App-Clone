import {ListItem,ListItemAvatar, Avatar, ListItemText} from '@mui/material'
import { useContext } from 'react';
import GroupIcon from '@mui/icons-material/Group';
import { ReceiverIdContext, HeaderContext, MessagesContext, ReceiverClassContext } from '../../Helper/Context';


export default function AccordionList(prop) {
    const {list, receiver} = prop
    const {receiverId, setReceiverId} = useContext(ReceiverIdContext)
    const {messages, setMessages} = useContext(MessagesContext)
    const {header, setHeader} = useContext(HeaderContext)
    const {receiverClass, setReceiverClass} = useContext(ReceiverClassContext)

    function handleListClick(e){
        const id = e.currentTarget.id
        getMessages(receiver, id)
        setReceiverClass(receiver)
        setReceiverId(id)
    }

    // Retreive Messages
    async function getMessages(receiver, id){
        const getMessagerResponse = await fetch(`http://206.189.91.54/api/v1/messages?receiver_id=${id}&receiver_class=${receiver}`,{
            method: 'GET',
            headers: header
        })
        const body = await getMessagerResponse.json()
        setMessages(body.data)
        console.log(body.data)
    }

    const listElements = list.map((elem)=>{
        return (
            <ListItem  component='li' key={elem.id} className='accordion-item' id={elem.id}
            onClick={handleListClick}
                sx={{height: 50}}>
                <ListItemAvatar>
                    <Avatar>
                        <GroupIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText 
                    sx={{flexGrow: 2,
                        fontSize: 10
                    }}
                    primary={elem.name}
                />
            </ListItem>
    )
            
        })

    return (
        <div>
            {listElements}
        </div>
    )
}
