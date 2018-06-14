import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .content {
    font-family: ${tokens.fonts.founders.family};
    font-size: 24px;
    line-height: ${32 / 24};
    max-width: 720px;
  }

  .content__grid {
    display: flex;
  }

  .content__paragraph--theme-intro {
    font-size: 32px;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: ${40 / 32};
  }
`;
