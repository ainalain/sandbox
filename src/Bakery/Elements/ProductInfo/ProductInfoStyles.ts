import { createThemeFunction } from '../../../theme';

export const styles: createThemeFunction = (theme) => ({
  root: {
    ...theme.mixins.flexColumn,
    paddingLeft: theme.spacing.unit * 3,
  },
  title: {

  },
  description: {},
});

export type StyleProps =
  | 'root'
  | 'title'
  | 'description';
