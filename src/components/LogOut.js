import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import SignInBox from '../smartComponents/SignInBox'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import * as ROUTES from '../constants/routes'
import {auth} from '../firebase/firebase'

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

class LogOut extends React.Component {
  

  componentDidMount(){
    const {history} = this.props
    auth.onAuthStateChanged( user => {
      if (user) {
        
        history.push(ROUTES.HOME);

      } 
    })
  }

  render(){

  
    const { classes } = this.props
    return(
        <Fragment>
        <Grid container spacing={0} className={classes.body}>
          <Grid item sm={12} md={6}>
            
            <div className={classes.landBox}>
            <Typography component="h2" variant="h1" gutterBottom>
              See you next time!
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

LogOut.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(LogOut);
