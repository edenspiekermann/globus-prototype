import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .in-the-mood-block {
    line-height: 0;
    position: relative;
    width: 100%;
  }

  .in-the-mood-block--padded {
    padding: 40px;
  }

  @media ${tokens.mq.tablet} {
    .in-the-mood-block--padded {
      padding: 120px;
    }
  }

  .in-the-mood-block__image-container {
    position: relative;
  }

  .in-the-mood-block__button-container {
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateY(50%) translateX(-50%);
    z-index: 2;
  }
`;
