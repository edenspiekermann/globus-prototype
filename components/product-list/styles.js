import css from 'styled-jsx/css';

import tokens from '../../tokens';

export default css`
  .product-list {
    align-self: center;
    margin-bottom: 60px;
    margin-left: auto;
    margin-right: auto;
    max-width: 900px; /* TODO */
    padding-left: 20px;
    text-align: center;
  }

  @media ${tokens.mq.desktop} {
    .product-list {
      padding-left: 60px;
    }
  }

  .product-list__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 0 40px 0;
    padding: 0;
  }

  @media ${tokens.mq.desktop} {
    .product-list__list {
      margin-bottom: 0;
    }
  }

  .product-list__item {
    margin-bottom: 20px;
    padding-right: 20px;
    width: 50%;
  }

  @media ${tokens.mq.tablet} {
    .product-list__item {
      margin-bottom: 40px;
    }
  }

  @media ${tokens.mq.desktop} {
    .product-list__item {
      margin-bottom: 80px;
    }
  }
`;
