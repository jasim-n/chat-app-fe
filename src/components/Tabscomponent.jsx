import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Groupchat from "./Groupchat";
import Personalchat from "./Personalchat";
import BasicSpeedDial from "./BasicSpeedDial";
import { ThemeContext } from "../App";
import { useContext } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  console.log("props = ", props);
  const { displayid, setDisplayid } = useContext(ThemeContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const {personalchat}=props;
  return (
    <Grid container lg={12}>
      <Grid item lg={12} sx={{ transform: "scale(1)" }}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="All Conversation"
                {...a11yProps(0)}
                sx={{
                  width: "15px",
                  fontsize: "2px !important",
                  transform: "scale(.8)",
                }}
              />
              <Tab
                label="Archived"
                {...a11yProps(1)}
                sx={{
                  width: "15px",
                  fontsize: "2px !important",
                  transform: "scale(.8)",
                }}
              />
              <Tab
                label="Stared"
                {...a11yProps(2)}
                sx={{
                  width: "15px",
                  fontsize: "2px !important",
                  transform: "scale(.8)",
                }}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid item lg={12}>
              <Grid className="groupchat">
                <Typography>Team</Typography>

                <Groupchat />
                <Groupchat />
                <Groupchat />
                <Groupchat />
              </Grid>
            </Grid>
            <Grid item lg={12} className="personalchat">
              <Typography>Personal</Typography>
           
             
              {personalchat.map((s) => (
              
                <Personalchat chat={s} />
              ))}
            </Grid>
            <Grid className="float">
              <BasicSpeedDial />
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Twos
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </Grid>
    </Grid>
  );
}
