import {ListItem,ListItemAvatar, Avatar, ListItemText} from '@mui/material'

import GroupIcon from '@mui/icons-material/Group';
export default function AccordionList() {
  return (
    <div>
      <ListItem className='accordion-item'>
            <ListItemAvatar>
                <Avatar>
                    <GroupIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary=""
            />
        </ListItem>
    </div>
  )
}
