import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .content {
    font-family: ${tokens.fonts.founders.family};
    font-size: 24px;
    line-height: ${32 / 24};
    max-width: 720px;
  }

  .content a {
    color: #a1a1b3;
  }
`;
