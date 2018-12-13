import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import SignUpBox from '../smartComponents/SignUpBox'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import * as ROUTES from '../constants/routes'
import {auth} from '../firebase/firebase'
import LinearProgress from '@material-ui/core/LinearProgress'
import MoreInfoSignUp from '../components/MoreInfoSignUp'
import Zoom from '@material-ui/core/Zoom'

const styles = theme => ({
    landBox: {
      width:'80%',
      float: 'right',
      marginTop: '25%',
      padding: '1em',
  
    },
    logBox: {
      width:'80%',
      paddingTop: '25%',
      float:'left',
    },
    
})
const RenderBox = ({a})=> {
  console.log(a)
  return(
    <div>
      {{
        1: <Zoom in={a === 1}><SignUpBox /></Zoom>,
        2: <Zoom in={a === 2}><MoreInfoSignUp /></Zoom>,
      }[a]}
    </div>
  )
}

class SignUpPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showContent: false,
      lowerComponent: 2,
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
    if (this.state.showContent) {
      
    
    return(
        <Fragment>
        <Grid container spacing={0} className={classes.body}>
          <Grid item sm={12} md={6}>
            
            <div className={classes.landBox}>
            <Typography variant="h3" gutterBottom>
              Welcome to Vizit! <br/>
              </Typography>
              <Typography variant="h4" gutterBottom>
              Signing Up is easy, <br/>just choose an email and a password.
            </Typography>
            </div>
          </Grid>
          <Grid item sm={12} md={6}>
          <div className={classes.logBox}>
            <RenderBox a={this.state.lowerComponent}/>
            </div>
          </Grid>
          
        </Grid>
        </Fragment>
    )
    } else {
      return (
        <Fragment>
        <Grid container spacing={0} className={classes.body}>
          <Grid item sm={12}>
            <LinearProgress color="secondary"/>
            </Grid>
            </Grid>

        </Fragment>
      )
    }
}
}

SignUpPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
RenderBox.propTypes = {
  aval: PropTypes.oneOf(['1','2','3'])
};
  export default withStyles(styles)(SignUpPage);
