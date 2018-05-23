import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .figure {
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 1120px;
  }

  .figure__caption {
    color: #a1a1b3;
    font-family: ${tokens.fonts.founders.family};
    font-size: 16px;
    line-height: 1.45;
    margin-top: 10px;
    width: 720px;
  }

  .figure__author {
    font-size: 14px;
    margin-left: 15px;
    margin-top: 5px;
  }
`;
