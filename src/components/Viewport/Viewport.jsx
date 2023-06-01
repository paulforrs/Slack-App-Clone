import { Box ,TextField, Button} from '@mui/material'
import { useContext, useEffect } from 'react'
import { ChannelIdContext } from '../../Helper/Context'
import './style.css'

export default function Viewport() {
    const {channelId, setChannelId} = useContext(ChannelIdContext)
    
    return (
        <>
            <Box className ='viewport'sx={{
                backgroundColor: 'primary.dark',
                }}>
                <TextField
                id=""
                label=""
                value='test'
                />
                <Button variant='outlined'>Send</Button>
            </Box>
        </>
  )
}
