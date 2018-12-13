import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../App.css'
import Landing from './Landing'
import Home from './Home'
import * as routes from '../constants/routes'
import SignUp from './SignUp'
import LogOut from './LogOut';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'dark',
    primary:{ main: '#171821'},
    secondary:{main: '#D66464'},
    error: red,
  },
  overrides:{
    MuiPaper:{
      rounded:{
        borderRadius: '15px',
        backgroundColor: 'rgba(30,31,40,0.3)',
      },
    },
    MuiCssBaseline:{
      '@global':{
      body:{
        backgroundColor:'#22222B',
      },
    },
    },
  },
  
})

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  
})

class App extends Component {

    render(){
    const { classes } = this.props;
    return (
      <Router>
      <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Route exact path={routes.LANDING} component={Landing} />
        <Route exact path={routes.HOME} component={Home} />
        <Route exact path={routes.SIGN_UP} component={SignUp} />
        <Route exact path={routes.LOG_OUT} component={LogOut} />
      </div>
      </MuiThemeProvider>
      </Router>
    );
  
}
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
