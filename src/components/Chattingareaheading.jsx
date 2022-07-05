import React from 'react';
import Avatar from '@mui/material/Avatar';
import PhoneIcon from '@mui/icons-material/Phone';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Grid, Typography } from '@mui/material';

const Chattingareaheading = () => {
    return (
     <Grid item lg={12} >
       <Grid container >
        <Grid item lg={1}>
        <Avatar sx={{ml:"15px",mt:"10px"}} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADr-3PrecoVO1hoAmq1qUaXmfmPNM30r2Nw&usqp=CAU" />

        </Grid>
        <Grid item lg={8}>
            <Grid container sx={{pl:4}} lg={""}>
                <Grid item lg={12} >
                    <Typography>UI DESIGN</Typography>
                </Grid>
                <Grid item>
                <Typography>UI DESIGN</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item lg={3}>
            <Grid container spacing={5}>
            <Grid item sx={{Button:{background:"#f4f4fa",width:"60px",height:"60px",borderRadius:"50%",transform:"scale(.6)",color:"gray"}}} lg={3}><Button><PhoneIcon sx={{fontSize:"2.3rem"}}/> </Button></Grid>
            <Grid item sx={{Button:{background:"#f4f4fa",width:"60px",height:"60px",borderRadius:"50%",transform:"scale(.6)",color:"gray"}}} lg={3}><Button><PhotoCameraFrontIcon sx={{fontSize:"2.3rem"}}/></Button> </Grid>
            <Grid item sx={{Button:{background:"#f4f4fa",width:"60px",height:"60px",borderRadius:"50%",transform:"scale(.6)",color:"gray"}}} lg={2}><Button><MoreVertIcon sx={{fontSize:"2.3rem"}}/></Button></Grid>
            </Grid>

        </Grid>
       </Grid>
       </Grid>
    );
};

export default Chattingareaheading;