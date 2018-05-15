import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .button {
    background-color: white;
    color: black;
    display: inline-block;
    font-family: ${tokens.fonts.gill.family};
    font-size: 14px;
    font-weight: ${tokens.fonts.gill.weight.regular};
    letter-spacing: 0.5px;
    line-height: 1;
    padding: 1em 1.25em 0.75em;
    text-decoration: none;
    text-transform: uppercase;
    border: 1px solid black;
    text-align: center;
  }

  @media ${tokens.mq.desktop} {
    .button {
      font-size: 16px;
    }
  }

`;
