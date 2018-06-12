import { createThemeFunction } from '../../theme';

export const styles: createThemeFunction = (theme) => ({
  content: {
    backgroundColor: theme.palette.grey[900],
  },
  close: {
  },
  messageWrapper: {
    flex: '0.8',
  },
  message: {
    color: theme.palette.common.white,
    fontSize: '1.4rem',
  },
  action: {
    fontSize: '1.3rem',
  },
});

export type StyleProps =
  'content'
  | 'close'
  | 'messageWrapper'
  | 'message'
  | 'action';
