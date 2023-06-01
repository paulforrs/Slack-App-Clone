import { Container,Stack } from "@mui/system"
import AccordionMenu from "../AccordionMenu/AccordionMenu"
import { useState, useEffect } from "react"
import AddChannelDialog from "../AddChanngelDialog/AddChannelDialog"
import './style.css'
export default function Sidebar() {
    const [openChannelDialog, setOpenChannelDialog] = useState(false)
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
                    <AccordionMenu title={'Channels'} handleOpenChannelDialog={handleOpenChannelDialog} openChannelDialog={openChannelDialog}/>
                    <AccordionMenu title={'Direct Message'}/>
                </Stack>
            </Container>
            <AddChannelDialog handleCloseChannelDialog={handleCloseChannelDialog} openChannelDialog={openChannelDialog}/>
        </>
    )
    }
