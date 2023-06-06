import { Container,Stack } from "@mui/material"
import AccordionMenu from "../AccordionMenu/AccordionMenu"
import { useState, useEffect } from "react"
import AddChannelDialog from "../AddChannelDialog/AddChannelDialog"
import { ChannelListContext } from '../../Helper/Context';
import { useContext } from "react"
import './style.css'

export default function Sidebar(prop) {
    const {getChannels, getChannelDetails}= prop
    const [openChannelDialog, setOpenChannelDialog] = useState(false)
    const {channelList, setChannelList} = useContext(ChannelListContext)
    const CHANNEL = 'Channel'
    const USER = 'User'

    const handleOpenChannelDialog=()=>{
        console.log('opens')
        setOpenChannelDialog(true)
    }
    const handleCloseChannelDialog = ()=>{
        setOpenChannelDialog(false)
    }
    return (
        <>
            <Container component='div' sx={{
                backgroundColor: 'primary.dark',
                '&:hover': {
                backgroundColor: 'primary.main',
                }}}
                className="sidebar">
                <Stack spacing={2}>
                    <AccordionMenu title={'Channels'}
                    handleOpenChannelDialog={handleOpenChannelDialog}
                    openChannelDialog={openChannelDialog}
                    list={channelList} 
                    updateMenu={getChannels}
                    receiver = {'Channel'}/>
                    <AccordionMenu title={'Direct Message'} list={channelList} receiver = {'Users'}/>
                </Stack>
            </Container>
            <AddChannelDialog handleCloseChannelDialog={handleCloseChannelDialog} openChannelDialog={openChannelDialog} getChannels={getChannels}/>
        </>
    )
    }
