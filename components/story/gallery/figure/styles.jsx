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
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .figure--portrait .figure__image-container {
    flex: 1;
    position: relative;
    width: 100%;
  }

  .figure--portrait .figure__image {
    max-width: 400px;
  }

  .figure__caption {
    font-family: ${tokens.fonts.founders.family};
    color: #a1a1b3;
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
