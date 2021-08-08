import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createMuiTheme } from "@material-ui/core/styles";
import { StylesProvider, ThemeProvider, jssPreset } from "@material-ui/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import './index.css'


//ReactDOM.render(<App/>, document.querySelector('#root'));
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
    const theme = createMuiTheme({
      direction: "rtl"
    });
    
    ReactDOM.render(
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StylesProvider>,
      document.querySelector("#root")
    );
