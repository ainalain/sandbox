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
});

export type StyleProps =
  | 'card'
  | 'button';
