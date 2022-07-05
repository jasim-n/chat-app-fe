import React from 'react';
import Avatar from '@mui/material/Avatar'
import { Grid, Typography } from '@mui/material';


const Personalchat = () => {
    return (
   
        <Grid container className='personalchatdata'>
            <Grid item className='groupimg' sx={{position:"relative"}} lg={3}>
            <Avatar className='groupimgs' alt="Remy Sharp" src="https://library.kissclipart.com/20180919/xae/kissclipart-male-avatar-icon-clipart-computer-icons-avatar-104635e37f6b2f94.png" />


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

export default Personalchat;