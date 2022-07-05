import { Grid, Paper } from '@mui/material';
import React from 'react';
import Chattingareaheading from './Chattingareaheading';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Chattingareaheadingside from './Chattingareaheadingside';
import Chatblock from './Chatblock';
import ChatSender from './ChatSender';

const ChattingArea = () => {
    return (
        <Grid  item lg={8} sx={{ml:-3}} >
        <Grid container>
            <Grid item lg={8} sx={{ml:7}}>
                <Paper className='uidesign'>
                <Chattingareaheading/>
                
                </Paper>
                
            </Grid>
            <Grid  item>
                <Chattingareaheadingside/>
            </Grid>
            <Grid item lg={12}>
                <Chatblock/>
            </Grid>
            <Grid item lg={12}>
                <ChatSender/>
            </Grid>
        </Grid>
        </Grid>
    );
};

export default ChattingArea;