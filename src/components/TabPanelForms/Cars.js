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

const Cars = () => {
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
  const classes = useStyles();
  const handleChange = () => {};
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          fullWidth
          id="outlined-basic"
          variant="outlined"
          placeholder="Leaving From"
          className={classes.extraMargin}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RoomIcon />
              </InputAdornment>
            ),
          }}
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
          label="Add a different drop-off location"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          placeholder="Going to"
          variant="outlined"
          className={clsx(classes.margin)}
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
            className={clsx(classes.textField, classes.extraMargin)}
            InputLabelProps={{
              shrink: true,
              margin: "dense",
            }}
          />
        </div>
        <div className={classes.display}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="time"
            className={clsx(classes.margin, classes.textField)}
            InputLabelProps={{
              shrink: true,
              argin: "dense",
            }}
          ></TextField>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="time"
            defaultValue=""
            className={clsx(classes.textField, classes.extraMargin)}
            InputLabelProps={{
              shrink: true,
              margin: "dense",
            }}
          />
        </div>

        <FormControlLabel
          control={
            <Checkbox
              checked={false}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Include AARP member rates
         "
        />
        <p
          style={{
            marginLeft: "30px",
            fontSize: "12px",
            marginTop: "-10px",
            marginBottom: "20px",
          }}
        >
          {" "}
          Membership is required and verified at pick-up.
        </p>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ padding: "10px", backgroundColor: "#005aeb" }}
          className={classes.margin}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Cars;
