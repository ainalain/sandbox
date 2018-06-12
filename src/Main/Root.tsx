import { CssBaseline } from '@material-ui/core';
import { createGenerateClassName, jssPreset } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { create as createJss } from 'jss';
import compose from 'jss-compose';
import expand from 'jss-expand';
import extend from 'jss-extend';
import * as React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { Provider } from 'react-redux';

// import { CartActions } from '../Cart/Model/actions';
import { CssGlobal } from '../globalStyles';
import { muiTheme } from '../theme';

import App from './App';
import store from './store';

const jss = createJss(jssPreset()).use(
  extend(),
  compose(),
  expand()
);
const generateClassName = createGenerateClassName();

const AppRoot: React.SFC = () => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={muiTheme}>
      <CssGlobal />
      <CssBaseline />
      <App/>
    </MuiThemeProvider>
  </JssProvider>
);

// store.dispatch(CartActions.cleanCart());

export class Root extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <AppRoot />
        </Provider>
      );
    }
}

export default Root;
