import React from "react";

import {
  Grid,
  ListItem,
  ListItemText,
  List,
  Avatar,
  ListItemAvatar,
} from "@mui/material";

const Chatblock = () => {
  return (
    <List>
      <ListItem key="1" sx={{ flexDirection: "row-reverse" }}>
        <Grid container>
          <Grid item xs={12}>
            <ListItemText align="right">
              <ListItemAvatar align="right">
                <Avatar className="avt" src="" />{" "}
                <ListItemText
                  className="avtinsnd chatblockstyle chatblockstylesend"
                  align="right"
                  primary="Hey man, What's up ssFantasy Translation Editor: EndlessFantasy Translation

“What a loathsome fellow. He clearly is not friendly to the dragon race, yet he can obtain the dragons’ goodwill! This time, I alone will be enough to select a dragon.” Julius snorted coldly at Watson’s words and muttered unhappily.?"
                >
                  {" "}
                </ListItemText>{" "}
              </ListItemAvatar>
            </ListItemText>{" "}
          </Grid>

          <Grid item xs={12}>
            <ListItemText align="right" secondary="09:30">
              {" "}
            </ListItemText>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem key="2">
        <Grid container>
          <Grid item xs={12} sx={{ display: "flex" }}>
            <Grid container>
              <Grid item lg={12} sx={{ display: "flex" }}>
                <Avatar src="" />
                <ListItemText
                  className="chatblockstyle chatblockstyleres"
                  align="left"
                  primary="Hey man, What's up ?"
                ></ListItemText>
              </Grid>
              <Grid item lg={12}>
                <ListItemText align="left" secondary="09:30"></ListItemText>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </ListItem>
    </List>
  );
};

export default Chatblock;
