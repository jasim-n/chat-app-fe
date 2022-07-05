import { Grid, Paper,Button,Typography } from '@mui/material';
import { Box } from '@mui/system';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import AppsIcon from '@mui/icons-material/Apps';
import CallIcon from '@mui/icons-material/Call';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React, { useContext } from 'react';
import { ThemeContext } from '../App';
const Leftsidebar = () => {
    const {dark,setdark}=useContext(ThemeContext);

    return (
        <Grid lg={.7} item>
        <Grid container lg={1} className='leftsidebarmain' sx={{height:"96vh",mt:1,ml:1}}>
            <Grid item lg={2}>
                
                <Box className="leftsidebarbox" sx={{height:"100%"}}>
                    <Paper className='leftsidebarpaper' sx={{display:"flex",flexDirection:"column",alignItems:"center",background: dark? "black":"#4849a1",borderRadius:"10px",height:"100%",pl:"35px",pr:"35px"}} >
                    <Box className="leftsidebarinnerbox1"> <PlayCircleIcon  sx={{color:"gray"}} fontSize="large" />  </Box>
                        <Box className='leftsidebarmenubox'>
                        <Box className="leftsidebarinnerbox2 mrtl">
                            <Button>
                            <ChatIcon  sx={{color:"gray"}}  />
                            </Button>
                        </Box>
                        <Box className="leftsidebarinnerbox3 mrtl"> <Button><GroupsIcon sx={{color:"gray"}} /> </Button> </Box>
                        <Box className="leftsidebarinnerbox4 mrtl"><Button><AppsIcon  sx={{color:"gray"}} />  </Button></Box>
                        <Box className="leftsidebarinnerbox5 mrtl"><Button><CallIcon  sx={{color:"gray"}} /> </Button></Box>
                        </Box>
                        <Box className="leftsidebarinnerbox6" >
                            <Typography className='leftsidebarinnerbox6typo'>dark mode</Typography>
                            
                            <Button onClick={()=>{ setdark(!dark)}}><DarkModeIcon  sx={{color:"gray"}} fontSize='medium'  /> </Button></Box>


                    </Paper>
                </Box>
            </Grid>
        </Grid>
        </Grid>
    );
};

export default Leftsidebar;