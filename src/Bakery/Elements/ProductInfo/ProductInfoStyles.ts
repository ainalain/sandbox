import { createThemeFunction } from '../../../theme';

export const styles: createThemeFunction = (theme) => ({
  root: {
    ...theme.mixins.flexColumn,
    paddingLeft: theme.spacing.unit * 3,
  },
});

export type StyleProps =
  | 'root';
