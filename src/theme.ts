import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import { StyleRulesCallback } from '@material-ui/core';
import { red, yellow } from '@material-ui/core/colors/index';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const fontWeightMedium = 400;

export const muiTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: red,
    secondary: yellow
  },
  typography: {
    fontFamily:
    'open-sans,-apple-system,system-ui,BlinkMacSystemFont,' +
    '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    fontWeightMedium,
    htmlFontSize: 10,
  },
  mixins: {
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
      },
    flexCenter: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    size100: {
      width: '100%',
      height: '100%',
    },
    font16: {
      fontSize: 16,
    }
  },
});

export type createThemeFunction = Record<string, CSSProperties> | StyleRulesCallback<string>;
