import { withStyles, WithStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { getCartProducts } from '../../../Cart/Model/selectors';
import { List, Params } from '../../../Library/List/List';
import { Snackbar } from '../../../Library/Snackbar/Snackbar';
import { Model } from '../../../Main/Model';
import { isEqualWithDiff } from '../../../helpers/deepEqual';
import { CartActions } from '../../Model/actions';
import { ProductInCart } from '../../Model/store';

import { styles, WithStyleProps } from './ShoppingListStyles';

type ModelProps = Partial<{
  cartContent: Record<string, ProductInCart>;
}>;

interface DispatchProps {
  removeFromCart: (id: string, fullProduct?: boolean) => void;
}

type Props = ModelProps & DispatchProps & WithStyles<WithStyleProps>;

interface ShoppingListState {
  message?: string;
}

type State = Readonly<ShoppingListState>;

export class ShoppingListPure extends React.Component<Props, State> {
  readonly state: State = {
    message: undefined,
  };

  componentWillReceiveProps(nextProps: Props) {
    const { cartContent } = this.props;
    const diff = isEqualWithDiff(cartContent, nextProps.cartContent);

    if (cartContent && Array.isArray(diff) && diff.length) {
      const obj = diff[0];
      const id = Object.keys(obj).find((item: any) => obj.hasOwnProperty(item));
      const { name } = id ? obj[id] : 'product';

      let message = `${name} was removed from the cart.`;
      this.setState({ message });
    }
  }

  removeProductFromCart = (payload: Params) => {
    const { value, args } = payload;
    const fullProduct = args ? args.fullProduct : false;
    this.props.removeFromCart(value, fullProduct);
  }

  render() {
    const { cartContent } = this.props;
    const { message } = this.state;

    return (
      <div className="ggg">
        <List data={cartContent} onActionClick={this.removeProductFromCart} />
        <Snackbar
          open={!!message}
          message={message}
          hasClose={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: Model.Root): ModelProps => ({
  cartContent: getCartProducts(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  removeFromCart: (id: string, fullProduct?: boolean) => dispatch(CartActions.removePositionFromCart(id, fullProduct)),
});

export const ShoppingListConnected =
  connect<ModelProps, DispatchProps, null>(mapStateToProps, mapDispatchToProps)(ShoppingListPure);
export const ShoppingList = withStyles(styles, { withTheme: true })<{}>(ShoppingListConnected);
export default ShoppingList;
