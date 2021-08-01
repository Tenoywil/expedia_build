import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import RoomIcon from "@material-ui/icons/Room";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  margin: {
    marginRight: "10px",
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: 200,
    borderRadius: "10px",
  },
  display: {
    display: "flex",
    marginTop: "10px",
    width: "100%",
  },
  extraMargin: {
    marginBottom: "10px",
  },
}));

const Stays = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();
  const handleChange = () => {};
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true">
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          fullWidth
          id="outlined-basic"
          placeholder="Going to"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RoomIcon />
              </InputAdornment>
            ),
          }}
        />
        <div className={classes.display}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="date"
            className={clsx(classes.margin, classes.textField)}
            InputLabelProps={{
              shrink: true,
              argin: "dense",
            }}
          ></TextField>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="date"
            defaultValue=""
            className={clsx(classes.textField)}
            InputLabelProps={{
              shrink: true,
              margin: "dense",
            }}
          />
        </div>
        <div className={(classes.display, { justifyContent: "space-between" })}>
          <FormControlLabel
            control={
              <Checkbox
                checked={false}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Add a flight"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={false}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Add a car"
          />
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          variant="outlined"
          placeholder="Leaving From"
          className={clsx(classes.margin, classes.extraMargin)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RoomIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.margin}
          style={{ padding: "10px", backgroundColor: "#005aeb" }}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Stays;
