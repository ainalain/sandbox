import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import * as React from 'react';

const styles: (theme: Theme) => {} = (theme: Theme) => ({
  '@global': {
    body: {
      fontFamily: 'Noto Sans, Roboto, sans-serif',
      fontSize: 14,
      fontWeightLight: 200,
      fontWeightRegular: 400,
      fontWeightMedium: 700,
      backgroundColor: '#FFF !important',
    },
  }
});
type StyleProps = 'body' ;

const CssGlobalPure: React.SFC<WithStyles<StyleProps>> = () => null;

export const CssGlobal = withStyles(styles, {withTheme: true})<{}>(CssGlobalPure);
