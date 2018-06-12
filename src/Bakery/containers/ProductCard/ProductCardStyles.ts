import { createThemeFunction } from '../../../theme';

export const styles: createThemeFunction = (theme) => ({
  card: {
    ...theme.mixins.flexColumn,
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  button: {
    margin: theme.spacing.unit,
  },
  product: {
    [theme.breakpoints.up('md')]: {
      flex: 3,
    },
  },
  info: {
    [theme.breakpoints.up('md')]: {
      flex: 2,
    },
  },
  notification: {

  },
});

export type StyleProps =
  | 'card'
  | 'button'
  | 'info'
  | 'title'
  | 'description'
  | 'notification';
