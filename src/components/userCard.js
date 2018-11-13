import React, { Fragment } from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import userIMG from '../images/user.jpg'



const styles = {
    card: {
        maxWidth:400,
    },
    media: {
        objectFit: 'cover',
    }
}
function UserCard(props) {
    const { classes } = props
    
        return(
            <Fragment>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            alt="user.firstName"
                            className={classes.media}
                            height="140"
                            image={userIMG}
                            title="user.firstName"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Roberto Ramos
                            </Typography>
                            <Typography component="p">
                                lorem ipsum
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                </Card>
            </Fragment>
        )
    
}

UserCard.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(UserCard)