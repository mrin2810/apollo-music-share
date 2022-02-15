import { Grid, useMediaQuery, Hidden } from '@material-ui/core';
import React from 'react';
import AddSong from './components/AddSong';
import Header from './components/Header';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';

function App() {
  const greaterThanMedium = useMediaQuery(theme => theme.breakpoints.up('md'));
  const greaterThanSmall = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <div style={{ width: '95vw' }}>
      <Hidden only='xs'>
        <Header />
      </Hidden>
      <Grid container spacing={3} style={{ paddingTop: greaterThanSmall ? '80px' : '10px' }}>
        <Grid item xs={12} md={7}>
          <AddSong />
          <SongList />
        </Grid>
        <Grid style={
          greaterThanMedium ? {
          position: 'fixed',
          width: '100%',
          top: '70px',
          right: '0'
        } : {
          position: 'fixed',
          left: 0,
          bottom: 0,
        }} item xs={12} md={5}>
          <SongPlayer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
