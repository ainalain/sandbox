import * as React from 'react';

import * as images from '../../assets/images/images';

interface Props {
  id: string;
  className?: string;
  imageClassName?: string;
}

export const ImagePure: React.SFC<Props> = (props) => {
  const {id, className, imageClassName } = props;
  return (
    <picture className={className} data-testtype="productImage">
      <source
        srcSet={images[`${id}`]}
        type="image/webp"
      />
        <source
          srcSet={images[`${id}`]}
          type="image/jpeg"
        />
          <img
            className={imageClassName}
            src={images[`${id}`]}
            alt="You can order this product with delivery."
          />
    </picture>
  );
};
