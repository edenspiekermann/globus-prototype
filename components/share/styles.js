import css from 'styled-jsx/css';

import tokens from '../../tokens';

export default css`
  .share {
    color: currentColor;
    margin-left: 5px;
    margin-right: 5px;
    text-decoration: none;
  }

  .share::before {
    display: inline-block;
    font-family: ${tokens.fonts.icon.family};
    font-size: 32px;
  }

  .share__label {
    ${tokens.mixins.visuallyHidden};
  }

  .share--facebook::before {
    content: '\\e81a';
    font-size: 26px;
  }

  .share--pinterest::before {
    content: '\\e82a';
  }

  .share--pinterest::before {
    content: '\\e826';
  }

  .share--print::before {
    content: '\\e82b';
  }
`;
