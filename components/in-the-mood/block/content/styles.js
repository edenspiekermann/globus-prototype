import css from 'styled-jsx/css';

import tokens from '../../../../tokens';

export default css`
  .content {
    font-family: ${tokens.fonts.founders.family};
    font-size: 24px;
    line-height: 1.25;
    padding: 30px 30px 60px 30px;
  }

  @media ${tokens.mq.desktop} {
    .content {
      max-width: 160px;
      padding: 0;
      font-size: 20px;
      position: absolute;
      top: 30px;
      width: 60%;
    }
  }

  @media ${tokens.mq.large} {
    .content {
      max-width: 320px;
      font-size: 24px;
    }
  }

  .content--left {
    left: 30px;
  }

  .content--right {
    right: 30px;
  }

  @media ${tokens.mq.desktop} {
    .content--right {
      text-align: right;
    }
  }

  @media ${tokens.mq.large} {
    .content--left,
    .content--right {
      top: 60px;
    }
    
    .content--right {
      right: 60px;
    }
    
    .content--left {
      left: 60px;
    }
  }

  .content__paragraph:first-child {
    margin-top: 0;
  }

  .content__paragraph:last-child {
    margin-bottom: 0;
  }
`;
