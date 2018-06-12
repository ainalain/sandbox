import { withStyles, WithStyles } from '@material-ui/core';
import * as React from 'react';

import { Ingredient } from '../../Model/store';
import { ProductDetails } from '../ProductDetails/ProductDetails';

import { styles, StyleProps } from './ProductInfoStyles';

interface OwnProps {
  name: string;
  description: string;
  ingredients: Array<Ingredient>;
}

type Props = OwnProps & WithStyles<StyleProps>;

export const ProductInfoPure: React.SFC<Props> = (props) => {
  const {
    classes, name, description, ingredients,
  } = props;

  return (
    <div className={classes.root}>
      <div className={classes.title}>{name}</div>
      <div className={classes.description}>{description}</div>
      <ProductDetails ingredients={ingredients}/>
    </div>

  );
};

export const ProductInfo = withStyles(styles, {withTheme: true})<OwnProps>(ProductInfoPure);
