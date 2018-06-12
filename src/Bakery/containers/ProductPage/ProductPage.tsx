import { withStyles, WithStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose, Dispatch } from 'redux';

import { ImagePure } from '../../../Library/Image/Image';
import { Model } from '../../../Main/Model';
import { ProductActions } from '../../Model/actions/actions';
import { Product } from '../../Model/store';

import { styles, StyleProps } from './ProductPageStyles';

interface OwnProps {}

interface ModelProps {
  products: Array<Product>;
}

interface DispatchProps {
  getProducts: () => void;
}

type Props = ModelProps & DispatchProps & OwnProps & WithStyles<StyleProps>;

class ProductPagePure extends React.Component<Props> {
  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    const { classes, products } = this.props;

    return (
      <div className={classes.page}>
        {products.length ?
          <div className={classes.gridList}>
            <div className={classes.gallery}>
              {products.map((item: Product, index: number) => (
                <Link
                  className={classes.link}
                  to={`/product/${item.id}`}
                  data-type="cake"
                  data-testid={item.id}
                  key={index}
                >
                  <div className={classes.item}>
                    <ImagePure
                      id={item.id}
                      className={classes.image}
                      imageClassName={classes.img}
                    />
                      <div className={classes.itemOverlay} data-id="overlay">
                        <button className={classes.detailsButton}>Details →</button>
                      </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        : null}
      </div>
    );
  }
}

const productsSelector = (state: Model.Root): Array<Product> => {
  if (state && state.product && state.product.products) {
    return state.product.products;
  }
  return [];
};

const mapStateToProps = (state: Model.Root): ModelProps => ({
  products: productsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  getProducts: () => dispatch(ProductActions.getAllProducts()),
});

export const ProductPage = compose(
  withStyles(styles, { withTheme: true }),
  connect<ModelProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)
)(ProductPagePure);
export default ProductPage;
