import { createThemeFunction } from '../../../theme';

export const styles: createThemeFunction = (theme) => ({
  gridList: {
    width: '100%',
    height: 'auto',
  },
  page: {
    display: 'block',
    width: '100%',

    [theme.breakpoints.up('md')]: {
      padding: '20px 20px 0',
    },
  },
  gallery: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 100%)',
    gridAutoFlow: 'dense',
    gridGap: '1.5rem',
    justifyContent: 'cetner',

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(auto-fill, 48%)',
    },
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(auto-fill, 48%)',
    }
  },
  link: {
    flex: 1,

  },
  item: {
    height: '18rem',
    minHeight: 130,
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',

    '&:hover [data-id="overlay"]': {
      visibility: 'visible',
      transform: 'translateY(0)',
    },

    [theme.breakpoints.up('md')]: {
      height: '24rem',
    }
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    gridColumn: '1 / -1',
    gridRow: '1 / -1',

    [theme.breakpoints.up('sm')]: {
      objectFit: 'cover',
    },
  },
  img: {
    composes: '$image',
  },
  itemOverlay: {
    position: 'relative',

    justifyItems: 'center',
    alignItems: 'center',
    display: 'grid',

    gridColumn: '1 / -1',
    gridRow: '1 / -1',

    transform: 'translateY(100%)',
    transition: '0.2s',
    visibility: 'hidden',

    background: '#ffc60032',
  },
  detailsButton: {
    background: 'none',
    border: '2px solid white',
    color: 'white',
    textTransform: 'uppercase',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '5px',
  },
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
  | 'gridList'
  | 'page'
  | 'gallery'
  | 'link'
  | 'item'
  | 'itemOverlay'
  | 'button'
  | 'notification'
  | 'detailsButton'
  | 'image'
  | 'img';
