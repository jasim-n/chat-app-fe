import React from "react";
import Avatar from "@mui/material/Avatar";
import { Grid, Typography } from "@mui/material";
import { ThemeContext } from "../App";
import { useContext } from "react";
import API from "../api";
import Cookies from "js-cookie";

const chatHandler = async() => {
  const chatId = "62bef2a5d64e8208d61cb0f9";
  try {
    
    const token = Cookies.get("myCookie");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const chat = await API.get(`/api/messages/fetch-all-messages/${chatId}`, config);
    console.log(chat,"insdiud")
  } catch (error) {
    console.log("error : ", error);
  }
};
const Personalchat = (props) => {
  const { setDisplayid } = useContext(ThemeContext);

  return (
    <Grid
      container
      className="personalchatdata"
      onClick={() => {setDisplayid(1) ; chatHandler()}}
    >
      <Grid item className="groupimg" sx={{ position: "relative" }} lg={3}>
        <Avatar
          className="groupimgs"
          alt="Remy Sharp"
          src="https://library.kissclipart.com/20180919/xae/kissclipart-male-avatar-icon-clipart-computer-icons-avatar-104635e37f6b2f94.png"
        />
      </Grid>
      <Grid item>
        {console.log(props)}
        <Grid className="groupchatin">
          <Grid container>
            <Grid item lg={12}>
              <Typography>{props.chat.chatName}</Typography>
            </Grid>
            <Grid lg={12} item className="groupchatins">
              <p>props.data</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Personalchat;
