import { Button, Typography } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Add, PhotoCamera } from '@material-ui/icons';
import * as React from 'react';

import { ImagePure } from '../../../Library/Image/Image';
import { Product } from '../../Model/store';

import { styles, StyleProps } from './ProductPhotoStyles';

export type ProductPhotoProps = Pick<Product, 'id' | 'author' | 'authorLink' | 'price'>;

export interface OwnProps {
  onClick: () => void;
}

type Props = ProductPhotoProps & OwnProps & WithStyles<StyleProps>;

export const ProductPhotoPure: React.SFC<Props> = (props) => {
  const {
    classes, id, authorLink, author, onClick, price } = props;

  return (
    <React.Fragment>
      <div className={classes.photo}>
        <ImagePure id={id} className={classes.image} imageClassName={classes.img}/>
        <div className={classes.authorWrapper}>
          <Typography className={classes.author}>
            <a
              className="authorLink"
              href={authorLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Watch the high-resolution photo on Unsplash.com"
            >
              Photo by {author} on&nbsp;
              <PhotoCamera className={classes.unsplash}/>&nbsp;Unsplash.com
            </a>
          </Typography>
        </div>
      </div>
      <div className={classes.action}>
        <Typography className={classes.price}>
          Price: {price}
        </Typography>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          className={classes.button}
          onClick={onClick}
          data-testid="addProductToCart"
        >
          <Add />
        </Button>
      </div>
    </React.Fragment>
  );
};

export const ProductPhoto = withStyles(styles, { withTheme: true })<OwnProps>(ProductPhotoPure);
