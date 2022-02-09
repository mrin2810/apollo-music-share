import { Grid } from '@material-ui/core';
import React from 'react';
import AddSong from './components/AddSong';
import Header from './components/Header';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';

function App() {
  return (
    <>
      <Header />
      <Grid container spacing={3} style={{ paddingTop: '80px' }}>
        <Grid item xs={12} md={7}>
          <AddSong xs={5}/>
          <SongList xs={5}/>
        </Grid>
        <Grid item xs={12} md={5}>
          <SongPlayer xs={2}/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
