import { Button, InputAdornment, TextField } from '@material-ui/core';
import { AddBoxOutlined, Link } from '@material-ui/icons';
import React from 'react';

function AddSong() {
    return (
        <div>
            <TextField 
                placeholder='Add a YouTube or SoundCloud Link'
                fullWidth
                margin='normal'
                type='url'
                InputProps={{
                    startAdornment: (
                        <InputAdornment>
                            <Link />      
                        </InputAdornment>
                    )
                }}
            />
            <Button
                // onClick={}
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