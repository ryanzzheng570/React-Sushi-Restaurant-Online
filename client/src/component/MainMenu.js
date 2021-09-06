import React from 'react';
import SectionContainer from './Section/SectionContainer';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyle = makeStyles(() => ({
    root: {
        marginTop: 'auto',
        marginLeft: 250,
        padding: 20,
        fontFamily: 'inherit',
        backgroundColor: 'white'
    }
}));

const MainMenu = (props) => {
    const classes = useStyle();
    const { sushi } = props;

    return (
        <Grid className={classes.root}>
            <SectionContainer
                name={'Maki Rolls'}
                description={'Sushi Made in rolls and sliced into round bite-size pieces'}
                sushi={sushi}
            />
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        sushi: state.availableSushi
    }
}

export default connect(mapStateToProps)(MainMenu);
