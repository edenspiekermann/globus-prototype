import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .title {
    font-family: ${tokens.fonts.founders.family};
    max-width: 1120px;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media ${tokens.mq.desktop} {
    .title {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .title__content {
    display: block;
    font-size: 50px;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: 1;
    text-align: center;
  }

  @media ${tokens.mq.desktop} {
    .title__content {
      font-size: 96px;
    }
  }

  .title__byline {
    color: #a1a1b3;
    display: block;
    font-size: 20px;
    font-weight: ${tokens.fonts.founders.weight.regular};
    line-height: ${32 / 24};
    margin-top: 20px;
    text-align: center;
  }

  @media ${tokens.mq.desktop} {
    .title__byline {
      font-size: 24px;
      margin-top: 40px;
    }
  }
`;
