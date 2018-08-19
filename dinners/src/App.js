import React, { Component } from "react";
import {withStyles} from '@material-ui/core'
import Dinners from './Dinners'


const styles = theme => {}

function App(props)  {
  return (     
      <div>
        <Dinners />
      </div>
  )}

export default withStyles(styles)(App)