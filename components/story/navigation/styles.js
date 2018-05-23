import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .navigation {
    margin-bottom: 120px;
    margin-top: 60px;
    text-align: center;
  }

  .navigation__link {
    color: #a1a1b3;
    font-family: ${tokens.fonts.founders.family};
    font-size: 24px;
    text-decoration: underline;
  }

  .navigation__link + .navigation__link {
    margin-left: 20px;
  }
`;
