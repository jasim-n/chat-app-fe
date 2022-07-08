import { Grid } from '@mui/material';
import React from 'react';
import Chatlog from './Chatlog';
import ChattingArea from './ChattingArea';
import Leftsidebar from './Leftsidebar';
import { ThemeContext } from "../App";
import {useContext} from "react";
import Nonchat from './Nonchat';
const Mainpage = () => {
     const { displayid,setDisplayid } = useContext(ThemeContext);

    return (
      <Grid container lg={12}>
        <Leftsidebar />
        <Chatlog />
        {displayid && <ChattingArea />}
        
        {!(displayid) && <Nonchat/>}
      </Grid>
    );
};

export default Mainpage;