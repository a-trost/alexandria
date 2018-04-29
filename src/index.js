import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8e8e8e',
      main: '#616161',
      dark: '#373737',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff5f52',
      main: '#c62828',
      dark: '#8e0000',
      contrastText: '#fff',
    },
  },
});

ReactDOM.render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
