import { Box } from '@mui/material'
import { useContext, useEffect } from 'react'
import { ChannelIdContext } from '../../Helper/Context'

export default function Viewport() {
    const {channelId, setChannelId} = useContext(ChannelIdContext)
    
    return (
        <div>
        <Box
        sx={{
            height: 200,
            backgroundColor: 'primary.dark',
            '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
            },
        }}

        >
            <p>ViewPort</p>
        </Box>
        </div>
  )
}
