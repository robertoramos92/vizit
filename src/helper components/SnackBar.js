import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Warning from '@material-ui/icons/Warning';

const styles = theme => ({
    close: {
      padding: theme.spacing.unit / 2,
    },
  });

  function SnackBar(props, note, open) {
      const {classes} = props
      return (
          <Fragment>
              <div>
              <Snackbar 
              anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
              }}
              open={open}
              autoHideDuration={6000}
              onClose={props.handleCloseSnackbar}
              ContentProps={{
                  'aria-describedby': 'message-id',
              }}
              message={<span id="message-id"><Warning/>{note}</span>} 
              action={[
                
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={props.handleCloseSnackbar}
            >
              <CloseIcon />
            </IconButton>,
              ]}
              />
              </div>
          </Fragment>
      )
  }

  SnackBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SnackBar);