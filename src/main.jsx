import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fontsource/poppins/400.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from "@mui/material";
import store from '../modules/redux/store';

const theme = createTheme({ typography: { fontFamily: "Poppins" } });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
