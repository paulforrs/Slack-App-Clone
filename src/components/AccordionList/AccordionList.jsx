import {ListItem,ListItemAvatar, Avatar, ListItemText} from '@mui/material'
import { useContext } from 'react';
import GroupIcon from '@mui/icons-material/Group';
import { ChannelListContext } from '../../Helper/Context';


export default function AccordionList(prop) {
    const {list} = prop
    const {channelId, setChannelId} = useContext(ChannelListContext)
    console.log(list)

    const listElements = list.map((elem)=>{
        console.log(elem)
        return (
            <ListItem  key={elem.id} className='accordion-item' id={elem.id}>
                <ListItemAvatar>
                    <Avatar>
                        <GroupIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
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
