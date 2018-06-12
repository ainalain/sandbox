import { Product } from '../../Bakery/Model/store';

// tslint:disable
const product4 = {
  id: 'starCake',
  name: 'Star cake',
  description: 'Delicious cake with sweet stars',
  price: '$8.40',
  author: 'Annie Spratt',
  authorLink: 'https://unsplash.com/@anniespratt?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge ',
};

const product5 = {
  price: '$5.78',
  id: 'milleFeuille',
  name: 'Mille-feuille',
  author: 'Alireza Etemadi',
  description: 'Crispy cake with mild cream',
  authorLink: 'https://unsplash.com/@aliet?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge',
};

const product10 = {
  id: 'chocolateCupcakes',
  name: 'Chocolate cupcakes',
  description: 'Chocolate creamy cupcakes',
  price: '$8.40',
  author: 'Sheelah Brennan',
  authorLink: 'https://unsplash.com/@vanilla88?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge'
};

const product14 = {
  id: 'blueberryCakes',
  name: 'Blueberry cakes',
  description: 'Tasty cupcakes with fresh blueberry',
  price: '$3.50',
  author: 'Brina Blum',
  authorLink: 'https://unsplash.com/@brina_blum?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge',
};

export const products: Array<Product> = [
  product4, product5, product10, product14,
];
