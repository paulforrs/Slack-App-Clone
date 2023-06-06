import { useState } from 'react';
import {    Accordion,
            AccordionSummary,
            Typography,
            AccordionDetails,
            ListItem,
            ListItemAvatar,
            Avatar,
            ListItemText
        } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import AccordionList from '../AccordionList/AccordionList';
import './style.css'

export default function AccordionMenu(prop) {
    const {title,handleOpenChannelDialog, list, receiver} = prop
    const [expanded, setExpanded] = useState(false);
    

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    return (
        <div>
            <Accordion expanded={expanded === 'panel'} onChange={handleChange('panel')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {title}
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ListItem componenet='li'onClick={handleOpenChannelDialog} className='accordion-item'>
                        <ListItemAvatar>
                            <Avatar>
                            <AddIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Add new"
                        />
                    </ListItem>
                    {/* List Component */}
                    <AccordionList list={list} receiver ={receiver}/>
                </AccordionDetails>
            </Accordion>
        </div>
    )
    }
