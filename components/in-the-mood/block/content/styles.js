import css from 'styled-jsx/css';

import tokens from '../../../../tokens';

export default css`
  .content {
    font-family: ${tokens.fonts.founders.family};
    font-size: 24px;
    line-height: ${30 / 24};
  }

  @media ${tokens.mq.tablet} {
    .content {
      max-width: 25%;
      position: absolute;
      top: 40px;
    }
  }

  .content--left {
    left: 40px;
  }

  .content--right {
    right: 40px;
    text-align: right;
  }
`;
