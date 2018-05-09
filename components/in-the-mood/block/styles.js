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
`;
