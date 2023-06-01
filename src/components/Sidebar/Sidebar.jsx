import { Container,Stack } from "@mui/material"
import AccordionMenu from "../AccordionMenu/AccordionMenu"
import { useState, useEffect } from "react"
import AddChannelDialog from "../AddChanngelDialog/AddChannelDialog"
import { ChannelListContext } from '../../Helper/Context';
import { useContext } from "react"
import './style.css'

export default function Sidebar(prop) {
    const {getChannels}= prop
    const [openChannelDialog, setOpenChannelDialog] = useState(false)
    const {channelList, setChannelList} = useContext(ChannelListContext)

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
                width: 500,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                backgroundColor: 'primary.main',
                }}}
                >
                <Stack spacing={2}>
                    <AccordionMenu title={'Channels'} handleOpenChannelDialog={handleOpenChannelDialog} openChannelDialog={openChannelDialog} list={channelList} updateMenu={getChannels}/>
                    <AccordionMenu title={'Direct Message'} list={channelList}/>
                </Stack>
            </Container>
            <AddChannelDialog handleCloseChannelDialog={handleCloseChannelDialog} openChannelDialog={openChannelDialog} getChannels={getChannels}/>
        </>
    )
    }
