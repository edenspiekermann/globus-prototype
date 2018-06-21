import css from 'styled-jsx/css';

import tokens from '../../../../tokens';

export default css`
  .card {
    height: 100%;
    padding: 48px 24px;
  }

  @media ${tokens.mq.phone} {
    .card {
      padding: 40px 40px 40px 40px;
    }
  }

  @media ${tokens.mq.phablet} {
    .card {
      padding: 48px;
    }
  }

  @media ${tokens.mq.desktopLarge} {
    .cards {
      padding: 50px;
    }
  }

  .card:not(.card--is-active) {
    display: none;
  }

  .card-title {
    font-family: ${tokens.fonts.founders.family};
    font-size: 20px;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: 1.25;
    letter-spacing: 0.5px;
    margin-bottom: 16px;
    margin-top: 0;
    text-align: center;
    text-transform: uppercase;
  }

  .card-counter {
    opacity: 0.2;
    display: block;
    font-size: 16px;
    letter-spacing: 1px;
    margin-top: 16px;
  }

  .card-content {
    font-family: ${tokens.fonts.founders.family};
    font-size: 20px;
    line-height: 1.5;
  }

`;
