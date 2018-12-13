import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    paper: {
        padding: 50,
        margin: '15px',
    },
    text: {
        padding: theme.spacing.unit * 2,
    }
})
function Stream(props) {
    const { classes } = props
    return (
        <Fragment>
            <CssBaseline>
                <Paper className={classes.paper}>
                    <Typography className={classes.text} variant="h5" gutterBottom>
                        Stream
                    </Typography>
                </Paper>
            </CssBaseline>
        </Fragment>
    )
}

Stream.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Stream);