import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .product-list__title {
    font-family: ${tokens.fonts.founders.family};
    font-weight: ${tokens.fonts.founders.weight.medium};
    font-size: 32px;
    line-height: 1.25;
    text-align: center;
    margin-top: 0;
    margin-bottom: 48px;
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
    margin: 0 10px;
    padding: 0;
  }

  @media ${tokens.mq.desktop} {
    .product-list__list {
      flex-wrap: nowrap;
    }
  }

  .product-list__list-item {
    margin-bottom: 20px;
    padding-right: 10px;
    padding-left: 10px;
    width: 50%;
  }

  .product-list__all {
    margin-top: 32px;
    text-align: center;
  }
`;
