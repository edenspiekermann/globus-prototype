import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .intro-text {
    font-family: ${tokens.fonts.founders.family};
    font-size: 1.5rem;
    line-height: ${27 / 24};
    max-width: 640px;
  }

  @media ${tokens.mq.desktop} {
    .intro-text {
      font-size: 2rem;
    }
  }

  .intro-text__paragraph {
    margin-bottom: 0;
    margin-top: 0;
  }

  .intro-text__paragraph + .intro-text__paragraph {
    margin-top: 20px;
  }

  .intro-share {
    margin-top: 40px;
  }
`;
