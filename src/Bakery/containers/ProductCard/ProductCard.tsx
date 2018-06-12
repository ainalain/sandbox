import { withStyles, WithStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { compose, Dispatch } from 'redux';

import { CartActions } from '../../../Cart/Model/actions';
import { getCartProducts } from '../../../Cart/Model/selectors';
import { ProductInCart } from '../../../Cart/Model/store';
import { Snackbar } from '../../../Library/Snackbar/Snackbar';
import { Model } from '../../../Main/Model';
import { isEqualWithDiff } from '../../../helpers/deepEqual';
import { ProductInfo } from '../../Elements/ProductInfo/ProductInfo';
import { ProductPhoto } from '../../Elements/ProductPhoto/ProductPhoto';
import { ProductActions } from '../../Model/actions/actions';
import { getDetails, productByIdSelector } from '../../Model/selectors';
import { Details, Product } from '../../Model/store';

import { styles, StyleProps } from './ProductCardStyles';

interface Props extends RouteComponentProps<any> {}

type ModelProps = Partial<{
    product: Product;
    cartContent: Record<string, ProductInCart>;
    details: Details;
}>;

interface DispatchProps {
  getProductById: (id: string) => void;
  addToCart: (id: string) => void;
  removeFromCart: (id: string, fullProduct?: boolean) => void;
}

type CardProps = ModelProps & DispatchProps & Props & WithStyles<StyleProps>;

interface State {
  notificationMessage?: string;
  afterAdd: boolean;
}

export class ProductCardPure extends React.Component<CardProps, State> {
  readonly state: State = {
    notificationMessage: undefined,
    afterAdd: false,
  };

  componentWillMount() {
    const { product, match: { params } } = this.props;

    if (!product || product.id !== params.id) {
      this.props.getProductById(params.id);
    }
  }

  componentWillReceiveProps(nextProps: CardProps) {
    const { cartContent, match: { params } } = this.props;
    const diff = isEqualWithDiff(cartContent, nextProps.cartContent);

    if (Array.isArray(diff) && diff.length) {
      const obj = diff.find((item: any) => item[params.id]);
      const { amount, label } = obj[params.id];

      const currentAmount = cartContent && cartContent[params.id]
        ? cartContent[params.id].amount
        : 0;
      let message: string;
      let afterAdd: boolean;

      if (!currentAmount && amount) {
        message = `1 ${label} was added to the cart.`;
        afterAdd = true;
      } else if (amount > currentAmount) {
        afterAdd = true;
        message = `1 ${label} was added to the cart.`;
      } else if (!nextProps.cartContent || !Object.keys(nextProps.cartContent).length) {
        afterAdd = false;
        message = `1 ${label} was removed from the cart.`;
      } else {
        afterAdd = false;
        message = `1 ${label} was removed from the cart.`;
      }
      this.setState({ notificationMessage: message, afterAdd });
    }
  }

  onClick = () => {
    if (this.props.product) {
      this.props.addToCart(this.props.product.id);
    }
  }

  removeProductFromCart = () => {
    const id = this.props.product ? this.props.product.id : '';
    this.props.removeFromCart(id);
  }

  render() {
    const { product, details, classes } = this.props;
    const { notificationMessage, afterAdd } = this.state;

    return product
      ? (
          <section className={classes.card}>
              <ProductPhoto
                onClick={this.onClick}
                {...product}
              />
            <div className={classes.info}>
              <ProductInfo
                name={product.name}
                description={product.description}
                ingredients={details ? details.ingredients : []}
              />
            </div>
            <Snackbar
              open={!!notificationMessage}
              message={notificationMessage}
              hasAction={afterAdd}
              hasClose={true}
              actionFn={this.removeProductFromCart}
            />
          </section>
        )
      : null;
  }
}

const mapStateToProps = (state: Model.Root, props: Props): ModelProps => ({
  product: productByIdSelector(state, props.match.params.id),
  cartContent: getCartProducts(state),
  details: getDetails(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  getProductById: (id: string) => dispatch(ProductActions.getProductById(id)),
  addToCart: (id: string) => dispatch(CartActions.addProductToCart(id)),
  removeFromCart: (id: string, fullProduct?: boolean) => dispatch(CartActions.removePositionFromCart(id, fullProduct)),
});

const ProductCard = compose(
  withStyles(styles, { withTheme: true }),
  withRouter,
  connect<ModelProps, DispatchProps, Props>(mapStateToProps, mapDispatchToProps)
)(ProductCardPure);
export default ProductCard;
