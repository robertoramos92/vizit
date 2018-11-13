import React from 'react';
import './App.css';
import PropTypes from 'prop-types'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Navbar from './components/Navbar'
import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import CardStream from './components/CardStream'
import Stream from './components/Stream'


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary:{ main: '#212121'},
    secondary:{main: '#424242'},
    error: red
  }
})
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  cardShell: {
    padding: theme.spacing.unit * 2,
  },
})

function App(props) {
    const { classes } = props;
    return (
      <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container spacing={0}>
          
          <Grid item sm={12} md={3}>
          <div className={classes.cardShell}>
            <CardStream/>
          </div>
          </Grid>
          <Grid item sm={12} md={6}>
          </Grid>
          <Grid item sm={12} md={3} >
          <Stream />
          </Grid>
          
          </Grid>
          {/* Lower navbar grid*/} 
        <Grid container spacing={0}>
        <Navbar />
          </Grid>
          
      </div>
      </MuiThemeProvider>
    );
  
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
