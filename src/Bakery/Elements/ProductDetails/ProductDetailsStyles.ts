import { createThemeFunction } from '../../../theme';

export const styles: createThemeFunction = (theme) => ({
  list: {
    width: 'fit-content',
    padding: 0,
  },
  ingredient: {
    ...theme.mixins.flexColumn,
  },
  item: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: `${theme.spacing.unit * 2}px 0`,
  },
  divider: {
    width: '100%',
    backgroundColor: theme.palette.grey.A100,
  },
});

export type StyleProps =
  | 'list'
  | 'ingredient'
  | 'item'
  | 'divider';
