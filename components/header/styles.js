import css from 'styled-jsx/css';

import tokens from '../../tokens';

export default css`
  .header {
    background-color: black;
    color: white;
    font-family: ${tokens.fonts.gill.family};
    padding: 15px 15px 5px 15px;
    text-align: center;
  }

  @media ${tokens.mq.desktop} {
    .header {
      padding-bottom: 20px;
      padding-top: 30px;
    }
  }

  .header__title {
    color: currentColor;
    display: block;
    font-size: 34px;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 0;
    margin-top: 0;
    text-decoration: none;
    text-transform: uppercase;
  }

  @media ${tokens.mq.desktop} {
    .header__title {
      font-size: 38px;
      margin-bottom: 10px;
      margin-top: 0;
    }
  }

  .header__title:hover,
  .header__title:focus {
    text-decoration: underline;
  }

  .header__item {
    color: currentColor;
    display: none;
    padding-left: 1rem;
    padding-right: 1rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  @media ${tokens.mq.desktop} {
    .header__item {
      display: inline-block;
    }
  }
`;
