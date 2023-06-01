
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { LogInHeaderContext } from '../../Helper/Context';

export default function AddChannelDialog(prop) {
    const [name, setName] = useState('')
    const [user_ids, setUser_ids] = useState([])
    const {header, setHeader} = useContext(LogInHeaderContext)
    const {openChannelDialog, handleCloseChannelDialog, getChannels} = prop
    const handleCreateChannel =()=>{
        if(name.length > 0){
            createChannel()
            handleCloseChannelDialog()
        }
        else{
            alert('Channel name can\'t be empty')
        }
        
    }
    const handleChangeName=(e)=>{
        setName(e.target.value)
    }
    const createChannel= async ()=>{
        try{
            const response = await fetch('http://206.189.91.54/api/v1/channels',{
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': header.accessToken,
                    'client' : header.client,
                    'expiry': header.expiry,
                    'uid': header.uid
                },
                method: 'POST',
                body: JSON.stringify(
                    {
                        name,
                        user_ids: ['paulforrs@gmail.com']
                    }
                )
            })
            const body = await response.json()
            getChannels()
            console.log(body)
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div>
            <Dialog open={openChannelDialog} onClose={handleCloseChannelDialog}>
                <DialogTitle>Create Channel</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Channel Name"
                            defaultChecked={name}
                            type="email"
                            fullWidth
                            variant="standard"
                            onChange={handleChangeName}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="users"
                            label="Add users"
                            defaultChecked={name}
                            type="email"
                            fullWidth
                            variant="standard"
                            onChange={handleChangeName}
                        />
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseChannelDialog}>Cancel</Button>
                    <Button onClick={handleCreateChannel}>Create Channel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
