import { withStyles, Divider, WithStyles } from '@material-ui/core';
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

  const length = ingredients.length;

  return (
    <div>
      <ul className={classes.list}>
        {ingredients.map((item: Ingredient, index: number) =>
          <div className={classes.ingredient} key={item.name}>
            <div className={classes.item}>
                {item.name},&nbsp;{item.qty}
            </div>
            {index < length - 1
              ? <Divider classes={{ root: classes.divider }}/>
              : null}
          </div>
        )}
      </ul>
    </div>
  );
};

export const ProductDetails = withStyles(styles, { withTheme: true })<OwnProps>(ProductDetailsPure);
