import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withRouter, } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import {auth as autorize } from '../firebase/index'
import { FormControl, FormHelperText } from '@material-ui/core';
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

const AlertDrawer = ({errorCode}) => {
        
          switch (errorCode) {
            case 'auth/user-not-found': return (
              <div className="alertDrawer">
                <div className="alertContainer">
                  <Error className="errorIcon"/>
                  </div>
                <div className="alertContainer">
            Hang on a bit. We found no user for this email. Try again.
                </div>
              </div>
            );
            case 'auth/wrong-password': return (
              <div className="alertDrawer">
                <div className="alertContainer">
                  <Error className="errorIcon"/>
                  </div>
                <div className="alertContainer">
            You sure you wrote the right password?
                </div>
              </div>
            );
              default: return null;
              
          }
            
        
    }



const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    error: null,
    isSignedUp: false,
    checkPasswordLength: false,
    emailError: false,
  };

class SignInBox extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { ...INITIAL_STATE };
      }
  
    onChange = async event => {
        await this.setState({ [event.target.name] : event.target.value });
        const {email} = this.state;

        if (email.length > 1 && !/@\D+\d*\./.exec(email)) {
            this.setState ({
                emailError: true
            })
            
        } else if (email.length > 1 && /@\D+\d*\./.exec(email)) {
            this.setState ({
                emailError: false
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

        autorize.doSignInWithEmailAndPassword(email, password)
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
        const isInvalid = log.password.length < 7 || log.emailError;  
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
                        
                        name="password"
                        id="ps-input"
                        label="Password"
                        type="password"
                        margin="normal"
                        variant="outlined"
                        onChange={this.onChange}
                    />
                    </FormControl>
          
                  <Button 
                    variant="outlined" 
                    className={classes.button} 
                    type="submit" 
                    disabled={isInvalid}
                    onClick={this.onSubmit} >
                         Log In
                </Button>
                
                {this.state.error && <AlertDrawer errorCode={this.state.error.code} classes={classes}/> }
        
                </form>
        </React.Fragment>
    )}
}

SignInBox.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withRouter( withStyles(styles)(SignInBox));