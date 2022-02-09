import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiCssBaseline from '@material-ui/core/CssBaseline';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <MuiCssBaseline />
      <App />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root')
);