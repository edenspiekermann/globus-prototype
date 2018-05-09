import css from 'styled-jsx/css';

import tokens from '../../../../tokens';

export default css`
  .content {
    font-family: ${tokens.fonts.founders.family};
    font-size: 24px;
    line-height: ${30 / 24};
    padding: 20px 40px;
  }

  @media ${tokens.mq.tablet} {
    .content {
      max-width: 600px;
      padding: 0;
      position: absolute;
      top: 40px;
      width: 60%;
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

  .content__paragraph:first-child {
    margin-top: 0;
  }

  .content__paragraph:last-child {
    margin-bottom: 0;
  }
`;
