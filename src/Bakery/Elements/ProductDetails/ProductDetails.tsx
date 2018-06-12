import { withStyles, WithStyles } from '@material-ui/core/styles';
import * as React from 'react';

import { Ingredient } from '../../Model/store';

import { styles, StyleProps } from './ProductDetailsStyles';

interface OwnProps {
  ingredients: Array<Ingredient>;
}

type Props = OwnProps & WithStyles<StyleProps>;

export const ProductDetailsPure: React.SFC<Props> = (props) => {
  const {
    classes, ingredients
  } = props;

  return (
    <div className={classes.root}>
      {ingredients.map((item: Ingredient) =>
        <div className={classes.item} key={item.name}>
          <div className={classes.name}>
            {item.name}
          </div>
          <div className={classes.qty}>
            {item.qty}
          </div>
        </div>
      )}
    </div>
  );
};

export const ProductDetails = withStyles(styles, { withTheme: true })<OwnProps>(ProductDetailsPure);
