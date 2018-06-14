import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .product-list__title {
    font-family: ${tokens.fonts.founders.family};
    font-size: 26px;
    line-height: ${36 / 32};
    text-align: center;
  }

  @media ${tokens.mq.desktop} {
    .product-list__title {
      font-size: 32px;
    }
  }

  .product-list__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 0 0 10px;
    padding: 0;
  }

  @media ${tokens.mq.desktop} {
    .product-list__list {
      flex-wrap: nowrap;
      margin: 0 20px;
    }
  }

  .product-list__list-item {
    margin-bottom: 20px;
    padding-right: 10px;
    width: 50%;
  }

  @media ${tokens.mq.desktop} {
    .product-list__list-item + .product-list__list-item {
      margin-left: 20px;
    }
  }

  .product-list__all {
    margin-top: 20px;
    text-align: center;
  }

  @media ${tokens.mq.desktop} {
    .product-list__all {
      margin-top: 60px;
    }
  }
`;
