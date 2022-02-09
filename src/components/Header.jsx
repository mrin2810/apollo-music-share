import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { HeadsetRounded } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles(theme => ({
    title: {
      marginLeft: theme.spacing(2)
    }
}));

function Header() {
    const classes = useStyles()
    return (
        <>
            <AppBar position='fixed' color="primary">
                <Toolbar>
                    <HeadsetRounded />
                    <Typography className={classes.title} component="h1" variant="h6">
                        Apollo Music Share - <i>Mrinmayee Rane</i>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;