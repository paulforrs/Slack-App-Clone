import { Container,Stack } from "@mui/material"
import AccordionMenu from "../AccordionMenu/AccordionMenu"
import { useState, useEffect } from "react"
import AddChannelDialog from "../Dialog/AddChannelDialog/AddChannelDialog"
import { ChannelListContext, HeaderContext } from '../../Helper/Context';
import { useContext } from "react"
import './style.css'
import ChannelDetailsDialog from "../Dialog/ChannelDetailsDialog/ChannelDetailsDialog";

export default function Sidebar(prop) {
    const {getChannels, getMessages}= prop
    const [openChannelDialog, setOpenChannelDialog] = useState(false)
    const {channelList, setChannelList} = useContext(ChannelListContext)
    const [memberList, setMemberList] = useState([])
    const [channelDetails, setChannelDetails] = useState({})
    const {header, setHeader} = useContext(HeaderContext)
    const handleOpenChannelDialog=()=>{
        console.log('opens')
        setOpenChannelDialog(true)
    }
    const handleCloseChannelDialog = ()=>{
        setOpenChannelDialog(false)
        setMemberList([])
    }
    async function getChannelDetails(channelId){
        const getChannelDetailsResponse = await fetch(`http://206.189.91.54/api/v1/channels/${channelId}`,{
            method: 'GET',
            headers: header
        })
        const body = await getChannelDetailsResponse.json()
        alert(body.data)
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
                    receiver = {'Channel'}
                    getMessages={getMessages}
                    getDetails={getChannelDetails}/>
                    <AccordionMenu title={'Direct Message'}
                    list={channelList}
                    receiver = {'Users'}
                    getMessages={getMessages}
                    getDetails={null}/>
                </Stack>
            </Container>
            <AddChannelDialog
            handleCloseChannelDialog={handleCloseChannelDialog}
            openChannelDialog={openChannelDialog}
            getChannels={getChannels}
            setMemberList={setMemberList}
            memberList={memberList}/>
            <ChannelDetailsDialog channelDetails={channelDetails}/>
        </>
    )
    }
