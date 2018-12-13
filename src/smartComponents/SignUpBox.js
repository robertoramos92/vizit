import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withRouter, } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import {auth as autorize } from '../firebase/index'
import { Typography, FormControl, FormHelperText } from '@material-ui/core';
import Check from '@material-ui/icons/Check'
import Error from '@material-ui/icons/Error';
import '../App.css'

 const styles = theme => ({
  
    
  formControl: {
      margin: theme.spacing.unit,
  },
     check: {
        verticalAlign: 'middle',
     },
  container: {
    display: 'flex',
    flexDirection:'column',
    verticalAlign: 'middle',
    maxWidth:'50%', 
    margin: '0 auto',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    borderColor: 'white',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: '15px 0',
    background: 'linear-gradient(45deg, #D66464 30%, #931A8B 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
      
  },
  
}); 

const AlertDrawer = ({error, errorMessage}) => {
        if(error) {
            return (
                <div className="alertDrawer">
                <div className="alertContainer">
                  <Error className="errorIcon"/>
                  </div>
                <div className="alertContainer">
                Hang on a bit, we received the following error: {errorMessage}
                </div>
              </div>
            );
            
        }
    }



const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: null,
    isSignedUp: false,
    checkPasswordLength: false,
    passwordMatchError: false,
    emailError: false,
    openSnackBar: false,
  };

class SignUpBox extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { ...INITIAL_STATE };
      }
    handleOpenSnackBar = () => {
        this.setState({
            openSnackBar: true
        })
    }
    onChange = async event => {
        await this.setState({ [event.target.name] : event.target.value })
        
        const {
            email,
            password,
            confirmPassword
        } = this.state

        if (email.length > 1 && !/@\D+\d*\./.exec(email)) {
            this.setState ({
                emailError: true
            })
            
        } else if (email.length > 1 && /@\D+\d*\./.exec(email)) {
            this.setState ({
                emailError: false
            })
        }

        if (password.length > 7) {
            this.setState({
                checkPasswordLength:true
            })
           
        }
            else {
                this.setState({
                    checkPasswordLength: false
                })
            
        }

        if (password !== confirmPassword && password.length > 1 && confirmPassword.length > 1 ) {
            this.setState({
                passwordMatchError: true
            })
        } else  if( password === confirmPassword && password.length > 1 && confirmPassword.length > 1 ) {
            this.setState({
                passwordMatchError: false
            })
        }

        
    }
    onSubmit = event => {
        const {
            email,
            password,
        } = this.state

        const {
            history,
        } = this.props;

        autorize.doCreateUserWithEmailAndPassword(email, password)
        .then(authUser => {
            this.setState({...INITIAL_STATE});
            history.push(ROUTES.HOME);
            
        })
        .catch(error => {
            this.setState({ error })
        });

        event.preventDefault();
    }
    render(){
        const { classes } = this.props;
        const log = this.state;
        const isInvalid = 
        log.passwordMatchError|| log.password === '' ||
        log.confirmPassword === '' || log.email ==='' || log.password.length < 7 || log.emailError;

       
    return (
        
        <React.Fragment>
            
                <form className={classes.container} >
                <FormControl error={this.state.emailError} >
                    <TextField 
                        error={this.state.emailError}
                        name="email"
                        id="email" 
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        onChange={this.onChange}
                        
                    />
                    {this.state.emailError && 
                    <FormHelperText id="component-error-text">Email must be in the format: user@provider.domain</FormHelperText> }
                    </FormControl>
                    <FormControl>
                    <TextField
                        error={this.state.passwordMatchError} 
                        name="password"
                        id="ps-input"
                        label="Password"
                        type="password"
                        margin="normal"
                        variant="outlined"
                        onChange={this.onChange}
                    />
                    </FormControl>
                    <FormControl  error={this.state.passwordMatchError} >
                    
                    <TextField
                        error={this.state.passwordMatchError} 
                        name="confirmPassword"
                        id="ps-input2"
                        label="Confirm password"
                        type="password"
                        margin="normal"
                        variant="outlined"
                        onChange={this.onChange}
                    />
                    
                    {this.state.passwordMatchError && 
                    <FormHelperText id="component-error-text">Password must match</FormHelperText> }
                    
                    </FormControl>
                    

                
                
                <Button 
                    variant="outlined" 
                    className={classes.button} 
                    type="submit" 
                    disabled={isInvalid}
                    onClick={this.onSubmit} >
                        Sign Up
                </Button>
                <Typography variant='h6' gutterBottom>
                
                Password needs to:
                </Typography>
                
                <Typography variant='subtitle2' gutterBottom>
                Have + than 7 characters  {this.state.checkPasswordLength && <Check className={classes.check} color="secondary"/>}<br />
                Be smart {this.state.checkPasswordMatch && <Check className={classes.check} color="secondary"/> }<br/>
                </Typography>
                
                {this.state.error && <AlertDrawer error errorMessage={this.state.error.message}/> }
        
                </form>
        </React.Fragment>
    )}
}

SignUpBox.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withRouter( withStyles(styles)(SignUpBox));