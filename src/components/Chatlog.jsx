import { Grid, Paper, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";
import BasicTabs from "./Tabscomponent";
import SearchIcon from "@mui/icons-material/Search";
import Groupchat from "./Groupchat";
import Personalchat from "./Personalchat";
import BasicSpeedDial from "./BasicSpeedDial";
import API from "../api";
import Cookies from "js-cookie";

const Chatlog = () => {
  const { dark, setdark } = useContext(ThemeContext);
  const [getUserschat, setGetUserschat] = useState([]);

  // const getAllUsers = async () => {
  //   try {
  //     const token = Cookies.get("myCookie");
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //     const users = await API.get("api/users/getUsers", config);
  //     setGetUsers(users.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
    const getAllUsersChat = async () => {
      try {
        const token = Cookies.get("myCookie");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const users = await API.get(
          "/api/chats/fetch-chats",
          config
        );
        setGetUserschat(users.data);
      } catch (error) {
        console.log(error);
      }
    };

  // 
  useEffect(() => {
     getAllUsersChat();
  }, []);
  return (
    <Grid lg={3} item sx={{}}>
      <Grid lg={12} className="chatlogmain ">
        <Grid container lg={12} className="chatlog">
          <Paper
            className={
              dark
                ? "chatlogpaper chatlogcolordark"
                : "chatlogpaper chatlogcolor"
            }
          >
            <Grid
              className={
                dark
                  ? "chatlogheading chatlogcolordark"
                  : "chatlogheading chatlogcolor"
              }
              sx={{ pt: 2, pb: 1 }}
            >
              <Grid container>
                <Grid item>
                  <Badge className="bdg" badgeContent={4} color="secondary">
                    <Typography>Messages</Typography>
                  </Badge>
                </Grid>
                <Grid item className="chatlogsearchicon">
                  <SearchIcon />
                </Grid>
              </Grid>
              <Grid container className="chatlogheadin">
                <Grid item lg={4}>
                  <Typography className="chatlogindexs chatlogindexsm ">
                    All Conversation
                  </Typography>
                </Grid>
                <Grid item lg={4}>
                  <Typography className="chatlogindexs chatlogindexs1">
                    Archived
                  </Typography>
                </Grid>
                <Grid item lg={4}>
                  <Typography className="chatlogindexs chatlogindexs1">
                    Starred
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid className="groupchat">
                <Typography>Team</Typography>
                <Groupchat />
                <Groupchat />
                <Groupchat />
                <Groupchat />
              </Grid> */}
            {/* <Grid className="personalchat">
                <Typography>Personal</Typography>
                <Personalchat />
                <Personalchat />
                <Personalchat />
                <Personalchat />
                <Personalchat />
                <Personalchat />
                <Personalchat />
                <Personalchat />
                <Personalchat />
                <Personalchat />
                <Personalchat />
                <Personalchat />
              </Grid> */}
            <BasicTabs personalchat={getUserschat} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Chatlog;
