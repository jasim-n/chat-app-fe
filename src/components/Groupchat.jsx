import React from 'react';
import Avatar from '@mui/material/Avatar'
import { Grid, Typography } from '@mui/material';


const Groupchat = () => {
    return (
   
        <Grid container className='groupchatdata'>
            <Grid item className='groupimg' sx={{position:"relative"}} lg={3}>
            <Avatar className='groupimg1' alt="Remy Sharp" src="https://library.kissclipart.com/20180919/xae/kissclipart-male-avatar-icon-clipart-computer-icons-avatar-104635e37f6b2f94.png" />
            <Avatar className='groupimg2' alt="Remy Sharp" src="https://library.kissclipart.com/20180919/xae/kissclipart-male-avatar-icon-clipart-computer-icons-avatar-104635e37f6b2f94.png" />
            <Avatar className='groupimg3' alt="Remy Sharp" src="https://library.kissclipart.com/20180919/xae/kissclipart-male-avatar-icon-clipart-computer-icons-avatar-104635e37f6b2f94.png" />


            </Grid>
            <Grid item>
                <Grid className='groupchatin'>
                    <Grid><Typography>Zeeshan</Typography></Grid>
                    <Grid className='groupchatins'><p >Zeeshan</p></Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Groupchat;