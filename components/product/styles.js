import css from 'styled-jsx/css';

import tokens from '../../tokens';

export default css`
  .product {
    font-family: ${tokens.fonts.gill.family};
    text-align: center;
  }

  .product__title {
    color: black;
    font-size: 16px;
    margin-bottom: 0;
    text-transform: uppercase;
    font-weight: normal;
  }

  .product__type {
    display: block;
    font-weight: normal;
    text-transform: none;
    color: gray;
  }

  .product__price {
    display: block;
    font-weight: normal;
    margin-top: 10px;
    text-transform: none;
  }
`;
