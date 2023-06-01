import {ListItem,ListItemAvatar, Avatar, ListItemText} from '@mui/material'
import { useContext } from 'react';
import GroupIcon from '@mui/icons-material/Group';
import { ChannelIdContext, ChannelListContext } from '../../Helper/Context';


export default function AccordionList(prop) {
    const {list} = prop
    const {channelId, setChannelId} = useContext(ChannelIdContext)
    function handleListClick(e){
        setChannelId(e.currentTarget.id)
        console.log(e.currentTarget.id)

    }

    const listElements = list.map((elem)=>{

        return (
            <ListItem  components='li' key={elem.id} className='accordion-item' id={elem.id} onClick={(e)=>{handleListClick(e)}}
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
