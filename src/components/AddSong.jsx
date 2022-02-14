import { 
    Button, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, 
    TextField, makeStyles
} from '@material-ui/core';
import { AddBoxOutlined, Link } from '@material-ui/icons';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    urlInput: {
        margin: theme.spacing(1)
    },
    addSongButton: {
        margin: theme.spacing(1)
    },
    dialog: {
        textAlign: 'center'
    },
    thumbnail: {
        width: '90%'
    }
}))

function AddSong() {
    const classes = useStyles();
    const [dialog, setDialog] = useState(false)

    function handleDialogClose() {
        setDialog(false);
    }
    return (
        <div className={classes.container}>
            <Dialog
                className={classes.dialog}
                open={dialog}
                onClose={handleDialogClose}
            >
                <DialogTitle>Edit Song</DialogTitle>
                <DialogContent>
                    <img
                        src="https://i1.sndcdn.com/artworks-000670470790-ej1gvb-t500x500.jpg"
                        alt="Song Thumbnail"
                        className={classes.thumbnail}
                    />
                    <TextField
                        margin='dense'
                        name='title'
                        label='Title'
                        fullWidth
                    />
                    <TextField
                        margin='dense'
                        name='artist'
                        label='Artist'
                        fullWidth
                    />
                    <TextField
                        margin='dense'
                        name='thumbnail'
                        label='Thumbnail'
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleDialogClose}>Cancel</Button>
                    <Button color="primary" variant="outlined">Add Song</Button>
                </DialogActions>
            </Dialog>
            <TextField 
                className={classes.urlInput}
                placeholder='Add a YouTube or SoundCloud Link'
                fullWidth
                margin='normal'
                type='url'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <Link />      
                        </InputAdornment>
                    )
                }}
            />
            <Button
                className={classes.addSongButton}
                onClick={() => setDialog(true)}
                variant='contained'
                color='primary'
                endIcon={<AddBoxOutlined />}
            >
                ADD
            </Button>
        </div>
    )
}

export default AddSong;