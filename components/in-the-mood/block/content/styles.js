import css from 'styled-jsx/css';

import tokens from '../../../../tokens';

export default css`
  .content {
    font-family: ${tokens.fonts.founders.family};
    font-size: 24px;
    line-height: ${30 / 24};
    padding: 40px;
  }

  @media ${tokens.mq.tablet} {
    .content {
      max-width: 25%;
      padding: 0;
      position: absolute;
      top: 40px;
    }
  }

  .content--left {
    left: 40px;
  }

  .content--right {
    right: 40px;
  }

  @media ${tokens.mq.tablet} {
    .content--right {
      text-align: right;
    }
  }
`;
