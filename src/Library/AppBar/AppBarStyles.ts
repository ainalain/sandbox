import { createThemeFunction } from '../../theme';

export const styles: createThemeFunction = (theme) => ({
  root: {
    height: 64,
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    marginLeft: 'auto',
  },
  badgeRoot: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: 'auto',
  },
  badge: {
    top: -(theme.spacing.unit - 2),
    right: -(theme.spacing.unit - 2),
  },
  cartButton: {
    marginTop: theme.spacing.unit * 2,
  },
  title: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    outline: 'none',
    '&:hover h2': {
      transform: 'scale(1.2)',
    },
    '&:hover svg': {
      transform: 'scale(1.2)',
    }
  },
  titleText: {
    transition: 'transform 0.4s ease-out',
    marginTop: theme.spacing.unit,
    textTransform: 'capitalize',
    fontFamily: 'fantasy',
    fontSize: 16,
  },
  logo: {
    width: 40,
    height: 40,
  },
  logoIcon: {
    ...theme.mixins.size100,
    transition: 'transform 0.4s ease-out',
    fill: theme.palette.common.black,
  },
});

export type StyleProps =
  'root'
  | 'titleText'
  | 'menuButton'
  | 'link'
  | 'badgeRoot'
  | 'badge'
  | 'cartButton'
  | 'logo'
  | 'logoIcon'
  | 'title';
