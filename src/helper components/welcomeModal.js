import React, { Fragment } from 'react'
import Modal from '@material-ui/core/Modal'
import { Typography, FormGroup, FormControlLabel } from '@material-ui/core';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormLabel from '@material-ui/core/FormLabel'

const styles = theme => ({
    button:{
        width: '10rem',
        border: '1px solid white !important',
        color: 'white !important',
        backgroundColor: '#ED9390 !important',
        margin: '0 auto',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '1.5rem',
    },
    textField: {
        margin: '0 auto',
        width: '60%',
        paddingTop:'1rem',
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
    }
})
const welcomeModal = props => {
    

    
        const { classes } = props
        return (
            <Fragment>
                <Modal
                aria-labelledby="welcome-modal-title"
                aria-describedby="welcome-modal-description"
                open={props.open}
                
                >
                <div className={classes.paper}>
                    <Typography className={classes.font} variant="h4" id="modal-title">
                        Hi there!<br/> We're almost done.
                    </Typography>
                    <Typography className={classes.font} variant="subtitle1" id="welcome-modal-description">
                        We just need to ask you a few more questions.
                    </Typography>
                    <form className={classes.container} autoComplete="off">
                        <TextField
                        id="firstName"
                        label="First Name"
                        className={classes.textField}
                        
                        margin="normal"
                        />
                        <TextField
                        id="lastName"
                        label="Last Name"
                        className={classes.textField}
                        
                        margin="normal"
                        />
                        <TextField
                        id="nickName"
                        label="What name should we call you?"
                        className={classes.textField}
                        
                        margin="normal"
                        />
                        <FormLabel className={classes.textField} component="legend">What are your pronouns?</FormLabel>
                        <FormGroup className={classes.textField}>
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
                            All Done!
                        </Button>
                    </form>
                    <WelcomeModalWrapped />
                </div>
                </Modal>
            </Fragment>
        )
    
}

welcomeModal.propTypes = {
    classes: PropTypes.object.isRequired,
}

const WelcomeModalWrapped = withStyles(styles)(welcomeModal);
export default WelcomeModalWrapped