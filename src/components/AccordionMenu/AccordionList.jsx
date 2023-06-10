import {ListItem,ListItemAvatar, Avatar, ListItemText} from '@mui/material'
import { useContext } from 'react';
import GroupIcon from '@mui/icons-material/Group';
import { ReceiverIdContext, HeaderContext, MessagesContext, ReceiverClassContext } from '../../Helper/Context';


export default function AccordionList(prop) {
    const {list, receiver, getMessages, getDetails} = prop
    const {receiverId, setReceiverId} = useContext(ReceiverIdContext)
    const {messages, setMessages} = useContext(MessagesContext)
    const {header, setHeader} = useContext(HeaderContext)
    const {receiverClass, setReceiverClass} = useContext(ReceiverClassContext)

    function handleListClick(e){
        const id = e.currentTarget.id
        console.log('clicked')
        getMessages({receiver, id})
        setReceiverClass(receiver)
        setReceiverId(id)
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
                <div className='channel-menu'>
                    <span className="material-symbols-outlined" onClick={()=>{getDetails(receiverId)}}>
                        more_vert
                    </span>
                </div>
            </ListItem>
    )
            
        })

    return (
        <div>
            {listElements}
        </div>
    )
}
