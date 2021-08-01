import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ApartmentIcon from "@material-ui/icons/Apartment";
import FlightIcon from "@material-ui/icons/Flight";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import Box from "@material-ui/core/Box";
import Stays from "../TabPanelForms/Stays";
import Flights from "../TabPanelForms/Flights";
import Cars from "../TabPanelForms/Cars";
import "./Tabs.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    borderBottom: "1px grey",
    paddingBottom: "5px",
    scrollPaddingLeft: "5px",
  },
}));
const TabsLayer = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          indicatorColor="primary"
          textColor="primary"
          style={{ fontSize: "14px" }}
          aria-label="scrollable force tabs"
        >
          <Tab label="Stays" icon={<ApartmentIcon />} />
          <Tab label="Flights" icon={<FlightIcon />} />
          <Tab label="Cars" icon={<DirectionsCarIcon />} />
          <Tab label="Packages" icon={<LocalMallIcon />} />
          <Tab label="Things to do" icon={<ConfirmationNumberIcon />} />
          <Tab label="Cruises" icon={<DirectionsBoatIcon />} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Stays />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Flights />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Cars />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Four
      </TabPanel>
    </div>
  );
};

export default TabsLayer;
