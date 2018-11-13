import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    paper: {
        padding: 50,
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
                <Paper square className={classes.paper}>
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