import { Grid } from '@mui/material';
import React from 'react';
import Chatlog from './Chatlog';
import ChattingArea from './ChattingArea';
import Leftsidebar from './Leftsidebar';

const Mainpage = () => {
    return (
        <Grid container lg={12} >
     
        <Leftsidebar/>
          <Chatlog/>
          <ChattingArea/>
     </Grid>
     
    );
};

export default Mainpage;