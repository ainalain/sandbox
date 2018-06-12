import { createThemeFunction } from '../../theme';

export const styles: createThemeFunction = (theme) => ({
  root: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 600,
    },
  },
  listItemContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
  listItemRoot: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    [theme.breakpoints.up(450)]: {
      gridTemplateColumns: '1fr 1fr',
      gridColumn: 'span 2',
    },
  },
  primaryText: {
    ...theme.mixins.font16,
    color: theme.palette.common.black,
    textTransform: 'capitalize',
  },
  subheader: {
    ...theme.mixins.font16,
    color: theme.palette.common.black,
  },
  amount: {
    ...theme.mixins.font16,
    color: theme.palette.common.black,
  },
  delete: {
    // marginTop: -14,
    gridColumn: 'span 1'
  },
  button: {
    color: theme.palette.common.black,
  },
  null: {
    color: theme.palette.common.black,
  },
});

export type StyleProps =
  'root'
  | 'listItemContainer'
  | 'listItemRoot'
  | 'primaryText'
  | 'subheader'
  | 'amount'
  | 'delete'
  | 'button'
  | 'null';
