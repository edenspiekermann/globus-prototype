import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .product-list__title {
    font-family: ${tokens.fonts.founders.family};
    font-size: 32px;
    line-height: ${36 / 32};
    text-align: center;
  }

  .product-list__list {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0 20px;
    padding: 0;
  }

  .product-list__list-item + .product-list__list-item {
    margin-left: 20px;
  }
`;
