import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Grid,
  Toolbar,
  Typography
} from "@material-ui/core";

import about from "../about.png";
import logo from "../logo.svg";

const useStyles = makeStyles(theme => ({
  root: {
    flexiGrow: 1,
    color: "black"
  },
  aboutImg: {
    padding: "30px 150px 0px 150px",
    width: "100px"
  },
  aboutText: {
    fontFamily: "Montserrat",
    padding: "30px"
  },
  appBar: {
    background: "transparent",
    boxShadow: "none"
  },
  appLogo: {
    width: "160px"
  },
  list: {
    width: 400
  }
}));

const TemporaryDrawer = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
      data-testid="side-drawer"
    >

    </div>
  );

  return (
    <div>

    </div>
  );
};

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Grid justify="space-between" container></Grid>
          <TemporaryDrawer />
        </Toolbar>
      </AppBar>
    </div>
  );
}
