import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .title {
    font-family: ${tokens.fonts.founders.family};
  }

  .title__content {
    display: block;
    font-size: 96px;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: 1;
    text-align: center;
  }

  .title__content::before {
    content: '«';
  }

  .title__content::after {
    content: '»';
  }

  .title__byline {
    color: #a1a1b3;
    display: block;
    font-size: 24px;
    font-weight: ${tokens.fonts.founders.weight.regular};
    line-height: ${32 / 24};
    margin-top: 40px;
    text-align: center;
  }
`;
