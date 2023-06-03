
import { Button, Dialog, DialogTitle, DialogContent, Autocomplete, TextField, DialogActions } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { AllUsersContext, HeaderContext } from '../../Helper/Context';
import AddUserSearchBar from '../AddUserSearchBar/AddUserSearchBar';
import './style.css'

export default function AddChannelDialog(prop) {
    const {openChannelDialog, handleCloseChannelDialog, getChannels} = prop
    const {header, setHeader} = useContext(HeaderContext)
    const {allUsers, setAllUsers} = useContext(AllUsersContext)
    const [name, setName] = useState('')
    const [user_ids, setUser_ids] = useState([])
    const [message, setMessage] = useState('')
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
                headers: header,
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
            if('errors' in body){
                console.log(body.errors[0])
                setMessage(body.errors[0])
            }
            else if('data' in body){
                setMessage(`${name} has been created`)
            }
            
        }catch(error){
            console.log(error)
        }finally{
            setName('')
        }
    }
    useEffect(()=>{
        return setName('')
        
    },[])
    return (
        <>
            <Dialog className='addChannelDialog' id='dialogbox'open={openChannelDialog} onClose={handleCloseChannelDialog}>
                <DialogTitle>Create Channel</DialogTitle>
                    <DialogContent id='dialogContent'>
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
                        <AddUserSearchBar/>
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseChannelDialog}>Cancel</Button>
                    <Button onClick={handleCreateChannel}>Create Channel</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
