import React from 'react';
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import { withStyles} from '@material-ui/core/styles'
import { Toolbar, Typography, IconButton, InputBase, Tooltip } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { fade } from '@material-ui/core/styles/colorManipulator'
import Settings from '@material-ui/icons/Settings'
import CreditCard from '@material-ui/icons/CreditCard'
import Forum from '@material-ui/icons/Forum'
import QueueMusic from '@material-ui/icons/QueueMusic'
import Power from '@material-ui/icons/Power'
import { Link, withRouter } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import {auth as autorize } from '../firebase/index'
import '../App.css'
import Error from '@material-ui/icons/Error'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'

const styles = theme => ({
    ButtonWrapper:{
      margin: 'auto',
    },
    grow: {
        flexGrow: 1,
      },
    
      appBar: {
        top:'auto',
        bottom:0,
        display: 'flex',
      },
      Toolbar: {
        alignItems: 'center',
        display:'flex,',
        justifyContent: 'space-between',
        
      },
      search: {
        position: 'relative',
        borderRadius: '20px',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit * 3,
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width: '100%',
      },
      inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
      },

})

const AlertDrawer = ({error, errorMessage}) => {
  if(error) {
      return (
          <div className="alertDrawer NavCute">
          <div className="alertContainer">
            <Error className="errorIcon"/>
            </div>
          <div className="alertContainer">
          Hang on a bit, we received the following error: {errorMessage}. 
          <br/>Try logging out again in a while. If it persists, contact us.
          </div>
        </div>
      );
      
  }
}



class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null
    }
  }
    signOut = () => {
      const {history} = this.props
      autorize.doSignOut().then(() => {
        history.push(ROUTES.LOG_OUT);

      }).catch((error) => {
        this.setState({
          error
        })
      })
    }
    render() {

    const {classes} = this.props;
    return (
      <React.Fragment>
      {this.state.error && <AlertDrawer error errorMessage={this.state.error.message}/> }
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          
          <Toolbar className={classes.Toolbar} >
            <Typography variant="h6" color="default">
              <Link to={ROUTES.HOME}>VIZIT</Link> 
            </Typography>
            <div className={classes.ButtonWrapper}>
              <IconButton>
                <CreditCard/>
              </IconButton>
              <IconButton>
                <Forum />
              </IconButton>
              <IconButton>
                <QueueMusic/>
              </IconButton>
            </div>
            <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <Tooltip title="Settings">
              <IconButton>
                <Link to={ROUTES.SETTINGS}><Settings/></Link>
              </IconButton>
            </Tooltip>
            <Tooltip title="Log Out">
              <IconButton>
                <Power onClick={this.signOut}/>
              </IconButton>
            </Tooltip>
          </Toolbar>
          
          </AppBar>
        </React.Fragment>
    )
}}

function mapStateToProps(state, ownProps) {
  return {

  }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withRouter(withStyles(styles)(connect(mapStateToProps)(Navbar)));