import { all } from 'redux-saga/effects';

import products from '../Bakery/Model/sagas/saga';
import cart from '../Cart/Model/sagas/saga';

function* rootSaga() {
  yield all([
    products(),
    cart(),
  ]);
}

export default rootSaga;
