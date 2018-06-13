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
    font-size: 20px;
    line-height: ${30 / 20};
    margin-top: 10px;
    width: 100%;
  }
`;
