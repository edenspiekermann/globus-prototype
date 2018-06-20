import css from 'styled-jsx/css';

import tokens from '../../../../tokens';

export default css`
  .figure {
    font-size: 0;
    line-height: 1;
    position: relative;
    text-align: center;
    width: 100%;
  }

  .figure + .figure {
    margin-top: 40px;
  }

  @media ${tokens.mq.desktop} {
    .figure + .figure {
      margin-top: 0;
    }
  }

  .figure--portrait {
    height: 100vh;
  }

  .figure--portrait .figure__image {
    height: 100%;
    width: auto;
  }

  .figure__caption {
    color: #a1a1b3;
    font-family: ${tokens.fonts.founders.family};
    font-size: 16px;
    margin-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: left;
  }

  @media ${tokens.mq.desktop} {
    .figure__caption {
      color: #fff;
      font-size: 24px;
      margin-top: 0;
      padding-left: 0;
      padding-right: 0;
      position: absolute;
      width: 360px;
    }
  }

  @media ${tokens.mq.desktop} {
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
  }
`;
