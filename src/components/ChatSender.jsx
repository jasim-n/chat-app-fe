import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const ChatSender = () => {
    return (
       <Grid container className='Chatsender' lg={8}>
        <Grid container lg={12}>
            <Grid container lg={11} className='senderborder'>
                <Grid item lg={1}>
                    <Button className='sendermicbtn'><KeyboardVoiceIcon/></Button>
                </Grid>
                <Grid item lg={9.6}>
                <TextField className='sendingfield'  label="Standard" variant="standard" 
              />
               
                </Grid>
                <Grid item lg={.4}><Button sx={{ml:-1,top:"11px"}}><AttachFileIcon/></Button></Grid>
                <Grid item lg={.4}><Button sx={{top:"11px"}}><PhotoOutlinedIcon/></Button></Grid>

            </Grid>
            <Grid item  sx={{Button:{background:"#f4f4fa",width:"60px",height:"60px",borderRadius:"50%",transform:"scale(.8)",color:"gray",svg:{    transform: "rotate(326deg)",color:"blue"}}}} lg={1}><Button ><SendOutlinedIcon/></Button></Grid>

        </Grid>
        
       
       </Grid>
    );
};

export default ChatSender;