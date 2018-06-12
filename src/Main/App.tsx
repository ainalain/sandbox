import * as React from 'react';
import { Route, Router, Switch } from 'react-router';

import ProductCard from '../Bakery/containers/ProductCard/ProductCard';
import ProductPage from '../Bakery/containers/ProductPage/ProductPage';
import ShoppingList from '../Cart/containers/ShoppingList/ShoppingList';

import Layout from './Layout';
import { history } from './store';

export enum Routes {
  products = '/products',
  product = '/product/:id',
  shoppingList = '/shoppingList'
}

const renderWithLayout = (Component: any, LayoutWrapper: any) => {
  return <LayoutWrapper><Component /></LayoutWrapper>;
};

export const App: React.SFC = () => {
  const ProductLayout = () => (
    <Switch>
      <Route
        exact={true}
        path="/"
        render={() => renderWithLayout(ProductPage, Layout)}
      />
      <Route
        exact={true}
        path={Routes.products}
        render={() => renderWithLayout(ProductPage, Layout)}
      />
      <Route
        exact={true}
        path={Routes.product}
        render={() => renderWithLayout(ProductCard, Layout)}
      />
      <Route
        exact={true}
        path={Routes.shoppingList}
        render={() => renderWithLayout(ShoppingList, Layout)}
      />
    </Switch>
  );

  return (
    <div>
      <Router history={history}>
        <Switch>
          <ProductLayout/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
