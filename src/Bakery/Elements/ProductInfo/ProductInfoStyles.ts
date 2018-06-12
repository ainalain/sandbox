import { createThemeFunction } from '../../../theme';

export const styles: createThemeFunction = (theme) => ({
  root: {

  },
  title: {},
  description: {},
});

export type StyleProps =
  | 'root'
  | 'title'
  | 'description';
