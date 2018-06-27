import { withStyles, WithStyles } from '@material-ui/core';
import * as React from 'react';

import { Ingredient } from '../../Model/store';
import { ProductDetails } from '../ProductDetails/ProductDetails';

import { styles, StyleProps } from './ProductInfoStyles';

type OwnProps = Required<{
  name: string;
  description: string;
  ingredients: Array<Ingredient>;
}>;

type Props = OwnProps & WithStyles<StyleProps>;

export const ProductInfoPure: React.SFC<Props> = (props) => {
  const {
    classes, name, description, ingredients,
  } = props;

  return (
    <section className={classes.root}>
      <h1>{name}</h1>
      <div>{description}</div>
      <ProductDetails ingredients={ingredients}/>
    </section>

  );
};

export const ProductInfo = withStyles(styles, {withTheme: true})<OwnProps>(ProductInfoPure);
