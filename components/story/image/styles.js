import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .figure {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .figure__caption {
    font-family: ${tokens.fonts.founders.family};
    font-size: 16px;
    line-height: 1.45;
    margin-top: 10px;
    width: 720px;
  }

  .figure__author {
    display: block;
    font-size: 14px;
    margin-top: 5px;
  }
`;
