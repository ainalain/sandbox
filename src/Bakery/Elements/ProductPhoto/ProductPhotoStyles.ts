import { createThemeFunction } from '../../../theme';

export const styles: createThemeFunction = (theme) => ({
  product: {
    [theme.breakpoints.up('md')]: {
      flex: 3,
    },
  },
  photo: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    width: '100%',
  },
  image: {
    ...theme.mixins.size100,
    gridColumn: '1 / -1',
    gridRow: '1 / -1',
    objectFit: 'cover',
  },
  img: {
    ...theme.mixins.size100,
    objectFit: 'cover',
    [theme.breakpoints.up('md')]: {
      objectFit: 'contain',
    },
  },
  authorWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  author: {
    padding: theme.spacing.unit * 2,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    cursor: 'pointer',
    ' > a': {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none !important',
      color: theme.palette.common.white,
    },
    '&:first-child > a:visited': {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none !important',
      color: theme.palette.common.white,
    },
    '&:first-child > a:active': {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none !important',
      color: theme.palette.common.white,
    },
  },
  unsplash: {
    verticalAlign: 'middle',
  },
  action: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  price: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    color: theme.palette.common.black,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

export type StyleProps =
  | 'product'
  | 'authorWrapper'
  |'author'
  | 'unsplash'
  | 'photo'
  | 'image'
  | 'img'
  | 'action'
  | 'price'
  | 'button';
