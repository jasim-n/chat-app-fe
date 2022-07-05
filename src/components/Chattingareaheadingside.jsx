import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Badge from "@mui/material/Badge";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  secondary: {
    main: "#1976d2",
  },
});

const Chattingareaheadingside = () => {
  return (
    <Grid container className="Chattingareaheadingside" sx={{ ml: 6 }}>
      <Grid className="badge" item>
        <Badge color="secondary" variant="dot">
          <Grid className="bggrey">
            <CircleNotificationsIcon sx={{ fontSize: "30px " }} />
          </Grid>
        </Badge>
      </Grid>
      <Grid item className="avatarrightblock">
        <Avatar src="https://www.clipartmax.com/png/middle/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png" />
        <Grid className="avatarinner">
          <Typography>jasimmm</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Chattingareaheadingside;
