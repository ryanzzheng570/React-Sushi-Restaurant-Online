import React from 'react'
import { makeStyles } from '@material-ui/core'
import {
    Grid,
    Typography,
    Paper,
    ButtonBase
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        // margin: 'auto',
        maxWidth: 1000,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const PageItems = (props) => {
    const classes = useStyles();
    const { items } = props

    return (
        <div className={classes.root}>
            {items.length > 0 ? items.map((item) => {
                return (
                    <div key={item.id}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={item.imageUrl} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {item.description}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                Remove
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">$19.00</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                )
            })

                : <></>}
        </div>
    )
}

export default PageItems
