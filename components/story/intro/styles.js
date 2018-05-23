import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .intro {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .intro__title {
    font-family: ${tokens.fonts.founders.family};
    font-size: 160px;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: ${140 / 160};
    margin: -100px 40px 40px 40px;
    text-align: center;
  }

  .intro__meta {
    color: #a1a1b3;
    font-family: ${tokens.fonts.founders.family};
    font-size: 16px;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: ${20 / 16};
    text-transform: uppercase;
  }

  .intro__meta-category,
  .intro__meta-published {
    display: inline-block;
  }

  .intro__meta-category + .intro__meta-published::before {
    content: '—';
    margin-left: 5px;
    margin-right: 5px;
  }

  .intro__content {
    font-family: ${tokens.fonts.founders.family};
    font-size: 32px;
    line-height: ${36 / 32};
    max-width: 720px;
  }
`;
