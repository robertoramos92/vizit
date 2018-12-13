import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import SignInBox from '../smartComponents/SignInBox'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { withRouter, } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import {auth} from '../firebase/firebase'
import LinearProgress from '@material-ui/core/LinearProgress'

const styles = theme => ({
    landBox: {
      width:'80%',
      float: 'right',
      marginTop: '25%',
  
    },
    logBox: {
      width:'80%',
      marginTop: '25%',
      float:'left',
    },
    
})

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      showContent: false,
    }
  }
  componentDidMount(){
    const {history} = this.props
    auth.onAuthStateChanged( user => {
      if (user) {
        this.setState({
          showContent: false
        });
        history.push(ROUTES.HOME);

      } else {
        this.setState({
          showContent: true
        })
      }
    })
  }

render(){
    const { classes } = this.props
    if (!this.state.showContent) {
      return(
        <Fragment>
        <Grid container spacing={0} className={classes.body}>
          <Grid item sm={12}>
            <LinearProgress color="secondary"/>
            </Grid>
            </Grid>

        </Fragment>
      )
    } else {
      
    
    return(
        <Fragment>
        <Grid container spacing={0} className={classes.body}>
          <Grid item sm={12} md={6}>
            
            <div className={classes.landBox}>
            <Typography component="h2" variant="h1" gutterBottom>
              Welcome to <br/>Vizit.
            </Typography>
            </div>
          </Grid>
          <Grid item sm={12} md={6}>
          <div className={classes.logBox}>
            <SignInBox/>
            </div>
          </Grid>
          
        </Grid>
        </Fragment>
    )
}
}
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withRouter(withStyles(styles)(Landing));
