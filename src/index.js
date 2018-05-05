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
      light: '#ff5f52',
      main: '#c62828',
      dark: '#8e0000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffff56',
      main: '#ffea00',
      dark: '#c7b800',
      contrastText: '#000',
    },
  },
});

ReactDOM.render((<BrowserRouter><MuiThemeProvider theme={theme}><App /></MuiThemeProvider></BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
