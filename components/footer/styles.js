import css from 'styled-jsx/css';

import tokens from '../../tokens';

export default css`
  .footer {
    background-color: black;
    color: white;
    display: flex;
    font-family: ${tokens.fonts.gill.family};
    justify-content: center;
    overflow-x: hidden;
    padding: 40px;
  }

  .footer__layout-constraint {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
  }

  @media ${tokens.mq.desktop} {
    .footer__layout-constraint {
      flex-direction: row;
    }
  }

  .footer__category,
  .footer__items {
    list-style: none;
    padding: 0;
  }

  .footer__category {
    margin-right: 40px;
    margin-top: 0;
  }

  .footer__category-item-title {
    margin-top: 0;
  }

  .footer__items-item {
    margin-bottom: 10px;
  }

  .footer__items-item-title {
    text-transform: uppercase;
  }
`;
