import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import * as ROUTES from '../constants/routes'
import {auth as autorize } from '../firebase/index'
import { Typography, FormControl, FormHelperText } from '@material-ui/core';
import Check from '@material-ui/icons/Check'
import Error from '@material-ui/icons/Error';
import '../App.css'
import Checkbox from '@material-ui/core/Checkbox'
import FormLabel from '@material-ui/core/FormLabel'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


const styles = theme => ({
    button: {
        margin: '15px 0',
        background: 'linear-gradient(45deg, #D66464 30%, #931A8B 90%)',
        borderRadius: 10,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
          
      },
      smallContainer:{
          display: 'flex',
          flexDirection: 'row',
      },
    container: {
        display: 'flex',
        flexDirection:'column',
        verticalAlign: 'middle',
        maxWidth:'50%', 
        margin: '0 auto',
      },
    textField: {
        marginRight: '1rem',
      },

    paper: {
        position: 'absolute',
        minHeight: '50%',
        width: '40%',
        top: '15%',
        right:'30%',
        
        backgroundColor: '#ED9390',
        boxShadow: theme.shadows[5],
        padding:'3rem',
        borderRadius: '25px',
    },
    font: {
        color: 'white !important',
        textAlign: 'center',
    },
    
})

class MoreInfoSignUp extends Component {
    

    render(){
    const { classes } = this.props
    return (
        <Fragment>
            
        
                
                <form className={classes.container} autoComplete="off">
                    <div className={classes.smallContainer}>
                        <FormControl>
                            <TextField
                            id="firstName"
                            label="First Name"
                            className={classes.textField}
                            variant="outlined"
                            margin="normal"
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                            id="lastName"
                            label="Last Name"
                            
                            variant="outlined"
                            margin="normal"
                            />
                        </FormControl>
                    </div>
                        <FormControl>
                            <TextField
                            id="nickName"
                            label="What name should we call you?"
                            
                            variant="outlined"
                            margin="normal"
                            />
                        </FormControl>
                    <Typography variant="subtitle2">
                        When were you born?
                    </Typography>
                    <DayPicker onDayChange={day => console.log(day)} />
                    <FormLabel  component="legend">What are your pronouns?</FormLabel>
                    <FormGroup className={classes.smallContainer}>
                        <FormControlLabel
                        control={
                            <Checkbox checked={true} value="They/Them"/>
                        }
                        label="'They/Them'"
                        />
                        <FormControlLabel
                        control={
                            <Checkbox checked={true} value="She/Her"/>
                        }
                        label="'She/Her'"
                        />
                        <FormControlLabel
                        control={
                            <Checkbox checked={true} value="He/Him"/>
                        }
                        label="'He/Him'"
                        />
                    </FormGroup>
                    <Button variant="outlined" color="primary" className={classes.button}>
                        Next
                    </Button>
                </form>
                
            
            
        </Fragment>
    )

}
}

MoreInfoSignUp.propTypes = {
classes: PropTypes.object.isRequired,
}

 
export default withStyles(styles)(MoreInfoSignUp);