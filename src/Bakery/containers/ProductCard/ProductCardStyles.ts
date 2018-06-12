import { createThemeFunction } from '../../../theme';

export const styles: createThemeFunction = (theme) => ({
  card: {
    ...theme.mixins.flexColumn,
    width: '100%',
    height: 'auto',
  },
  button: {
    margin: theme.spacing.unit,
  },
  product: {},
  info: {},
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
