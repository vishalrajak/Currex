import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" >CURRENCY EXCHANGE </Typography> 
           
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default header;
