import { createThemeFunction } from '../../../theme';

export const styles: createThemeFunction = (theme) => ({
  root: {

  },
  item: {},
  name: {},
  qty: {},
});

export type StyleProps =
  | 'root'
  | 'item'
  | 'name'
  | 'qty';
