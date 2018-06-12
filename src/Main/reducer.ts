import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { productReducer } from '../Bakery/Model/reducer/reducer';
import { cartReducer } from '../Cart/Model/reducer';

const rootReducer = combineReducers({
  product: productReducer,
  router: routerReducer,
  cart: cartReducer,
});

export default rootReducer;
