import { Box } from '@mui/material'

export default function Viewport() {
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
        <p>Hello</p>
    </Box>
    </div>
  )
}
