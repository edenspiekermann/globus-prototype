import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .figure {
    background-color: #000;
    font-size: 0;
    line-height: 1;
    position: relative;
    text-align: center;
  }

  .figure--portrait {
    height: 100vh;
  }

  .figure--portrait .figure__image {
    height: 100%;
    width: auto;
  }

  .figure__caption {
    color: #fff;
    font-family: ${tokens.fonts.founders.family};
    font-size: 24px;
    position: absolute;
    text-align: left;
    width: 360px;
  }

  .figure__caption--position-top-right,
  .figure__caption--position-top-left {
    top: 60px;
  }

  .figure__caption--position-bottom-left,
  .figure__caption--position-bottom-right {
    bottom: 60px;
  }

  .figure__caption--position-bottom-right,
  .figure__caption--position-top-right {
    right: 60px;
    text-align: right;
  }

  .figure__caption--position-bottom-left,
  .figure__caption--position-top-left {
    left: 60px;
  }
`;
