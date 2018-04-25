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
    padding: 15px 25px;
    text-decoration: none;
    text-transform: uppercase;
  }

  @media ${tokens.mq.desktop} {
    .button {
      font-size: 16px;
    }
  }

  .button--window-condensed,
  .button--window {
    border: 1px solid black;
  }

  .button--window {
    padding-bottom: 12px;
    padding-top: 18px;
  }

  .button--window-condensed {
    padding: 14px 25px 10px 25px;
  }

  .button--window-condensed::after,
  .button--window-condensed::before {
    border: solid transparent;
    content: '';
    display: none;
    height: 0;
    left: 50%;
    pointer-events: none;
    position: absolute;
    top: 100%;
    width: 0;
  }

  .button--window-condensed:not(.button--window-condensed-open):hover::after,
  .button--window-condensed:not(.button--window-condensed-open):focus::after,
  .button--window-condensed:not(.button--window-condensed-open):hover::before,
  .button--window-condensed:not(.button--window-condensed-open):focus::before {
    display: block;
  }

  .button--window-condensed::after {
    border-color: transparent;
    border-top-color: black;
    border-width: 8px;
    margin-left: -8px;
  }

  .button--window-condensed::before {
    border-color: transparent;
    border-top-color: black;
    border-width: 9px;
    margin-left: -9px;
  }

  @media ${tokens.mq.desktop} {
    .button--window-condensed {
      padding: 13px 30px 7px 30px;
    }
  }

  .button:hover,
  .button:focus {
    background-color: black;
    color: white;
  }
`;
