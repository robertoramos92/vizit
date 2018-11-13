import React from 'react';
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import { withStyles} from '@material-ui/core/styles'
import { Toolbar, Typography, IconButton, Grid, InputBase, Icon } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { fade } from '@material-ui/core/styles/colorManipulator'
import Settings from '@material-ui/icons/Settings'
import CreditCard from '@material-ui/icons/CreditCard'
import Forum from '@material-ui/icons/Forum'
import QueueMusic from '@material-ui/icons/QueueMusic'

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
        borderRadius: theme.shape.borderRadius,
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


function Navbar(props) {
    const {classes} = props;
    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          
          <Toolbar className={classes.Toolbar} >
            <Typography variant="h6" color="default">
              VIZIT
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
          <IconButton>
            <Settings/>
          </IconButton>
          </Toolbar>
          
          </AppBar>
    )
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Navbar);