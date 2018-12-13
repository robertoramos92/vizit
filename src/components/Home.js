import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import CardStream from './CardStream'
import Stream from '../smartComponents/Stream'
import Navbar from '../smartComponents/Navbar'
import * as ROUTES from '../constants/routes'
import {auth} from '../firebase/firebase'
import WelcomeModalWrapped from '../helper components/welcomeModal'

const styles = theme => ({
    cardShell: {
      padding: theme.spacing.unit * 2,
    },
  })

const INITIAL_STATE = {
  displayName: '',
  email:'',
  emailVerified:'',
  photoURL:'',
  uId:'',
  userLogged: null,
  isFirstLog: true,
}

  class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
        ...INITIAL_STATE
      }
    }
    componentDidMount(){
      const {history} = this.props
      auth.onAuthStateChanged( user => {
        if (!user) {
          
          history.push(ROUTES.LANDING);
  
        } else {
          this.setState({
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            photoURL: user.photoURL,
            uId: user.uid,
            userLogged: true,
           

          });
          console.log(this.state);
        }
      })
    }
    render(){
    const { classes } = this.props;
    if (this.state.userLogged) {

      return (
        <Fragment>
          <Grid container spacing={0}>
            <Grid item sm={12} md={8}>
                <div className={classes.cardShell}>
                    <CardStream/>
                </div>
            </Grid>
            <Grid item sm={12} md={4} >
                <Stream />
            </Grid>
          </Grid>
            {/* Lower navbar grid*/} 
          <Grid container spacing={0}>
            <Navbar />
            
          </Grid> 
        </Fragment>
    )
      
    } else {
      return (
        <Fragment>
          <Grid container spacing={0}>
            <Grid item sm={12}>
                <div className={classes.cardShell}>
                    Spinner
                </div>
            </Grid>
            
          </Grid>
             
        </Fragment>
    )
    }
    
}
  }

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Home);