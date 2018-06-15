import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .title {
    font-family: ${tokens.fonts.founders.family};
    max-width: 1120px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
  }

  @media ${tokens.mq.desktop} {
    .title {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .title__content {
    display: block;
    font-size: 48px;
    hyphens: auto;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: 0.875;
    text-align: center;
  }

  @media ${tokens.mq.phablet} {
    .title__content {
      font-size: 64px;
    }
  }

  @media ${tokens.mq.tablet} {
    .title__content {
      font-size: 96px;
      hyphens: none;
    }
  }

  @media ${tokens.mq.desktop} {
    .title__content {
      font-size: 128px;
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
